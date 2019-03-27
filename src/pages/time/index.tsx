import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Card from '../../components/card'

export default class Time extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View>
        <Card />
        <Card />
        <Card />
      </View>
    )
  }
}
