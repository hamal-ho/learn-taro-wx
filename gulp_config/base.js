/* eslint-disable import/no-commonjs */
const minimist = require('minimist')

const { writeFile, readFile, mkdir } = require('fs')
const { promisify } = require('util')

const knownOptions = {
  string: ['type', 'name'],
  default: { type: '', name: 'my-component' }
}

exports.options = minimist(process.argv.slice(2), knownOptions)
exports.writeFile = promisify(writeFile)
exports.readFile = promisify(readFile)
exports.mkdir = promisify(mkdir)
