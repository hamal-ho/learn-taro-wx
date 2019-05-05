import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import 'taro-ui/dist/style/index.scss'
import '@tarojs/async-await'

import './app.scss'
import tabStore from './store/tabStore'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  tabStore
}

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: ['pages/home/home', 'pages/user/user'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#333333',
      selectedColor: '#6190e8',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/home/home',
          iconPath: 'assets/imgs/icon_calendar.png',
          selectedIconPath: 'assets/imgs/icon_calendar_active.png',
          text: '记账'
        },
        {
          pagePath: 'pages/user/user',
          iconPath: 'assets/imgs/icon_principal.png',
          selectedIconPath: 'assets/imgs/icon_principal_active.png',
          text: '我的'
        }
      ]
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store} />
  }
}

Taro.render(<App />, document.getElementById('app'))
