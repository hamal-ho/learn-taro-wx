import Taro, { Component } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'

export default class AddTask extends Component {
  constructor() {
    super(...arguments)
  }

  componentWillMount() {
    console.log(this.$router.params)
  }

  errr  = ()  =>{
    console.log('发生错误')
  }


  

  render() {
    return (
      <View>
        详情页面
      </View>
    )
  }
}
