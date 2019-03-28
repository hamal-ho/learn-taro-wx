import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Card from '../../components/card'

export default class Time extends Component {
  constructor() {
    super(...arguments)
  }

  tapBtn(idx: number) {
    console.log(idx, '下标')
  }



  render() {
    return (
      <View>
        <Card onBtn={this.tapBtn} />
      </View>
    )
  }
}
