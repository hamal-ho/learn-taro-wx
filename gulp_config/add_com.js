/* eslint-disable no-unused-vars */
/* eslint-disable import/no-commonjs */

const { src, dest, series, parallel } = require('gulp')
const rename = require('gulp-rename')
const { obj } = require('through2')
const { options, writeFile } = require('./base')

let outputPath = ''

if (options.type === 'com') {
  outputPath = `src/components/${options.name}`
} else if (options.type === 'page') {
  outputPath = `src/pages/${options.name}`
} else {
  throw new Error('请指定创建类型：com 或者 page')
}

function addStyle() {
  return writeFile(`${outputPath}/${options.name}.module.scss`, '').then(() => {
    console.info(`创建${options.name}.module.scss`)
  })
}

function addReStyle() {
  return writeFile(
    `${outputPath}/reset.scss`,
    `.${options.name}-container{\n\n}`
  ).then(() => {
    console.info(`创建reset.scss`)
  })
}

// 转换名称
function transformName(strName, connector) {
  const str = strName.split(connector)

  if (!str.length) return strName

  let name = str[0].charAt(0).toUpperCase() + str[0].slice(1)
  for (let i = 1; i < str.length; i++) {
    name = name + str[i].slice(0, 1).toUpperCase() + str[i].slice(1)
  }

  return name
}

function addTSX(cd) {
  src('gulp_config/template/com-template.txt')
    .pipe(
      rename(path => {
        path.dirname = ''
        path.basename = options.name
        path.extname = '.tsx'
      })
    )
    .pipe(
      obj(function(file, encode, cb) {
        const content = file.contents
          .toString(encode)
          .replace(/\$/g, transformName(transformName(options.name, '_'), '-'))
          .replace(/\%/g, options.name)

        file.contents = Buffer.from(content)
        this.push(file)

        cb()
      })
    )
    .pipe(dest(outputPath))
    .on('finish', () => {
      console.info(`创建${options.name}.tsx`)
      cd()
    })
}

exports.add_com = series(addTSX, parallel(addStyle, addReStyle))
