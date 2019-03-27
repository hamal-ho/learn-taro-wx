import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import CountItem from '../../components/count_item'

export default class Count extends Component<{}, {}> {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View>
        <CountItem />
        <CountItem />
        <CountItem />

      </View>
    )
  }
}
