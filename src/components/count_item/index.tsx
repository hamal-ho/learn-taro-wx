import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './count_item.module.scss'
import { AtIcon, AtProgress } from 'taro-ui'

interface IState {
  isOpen: boolean
}

export default class CountItem extends Component<{}, IState> {
  constructor() {
    super(...arguments)
    this.state = {
      isOpen: false
    }
  }

  toggle = e => {
    e.stopPropagation()
    this.setState(presState => ({
      isOpen: !presState.isOpen
    }))
  }

  render() {
    const body = (
      <View className={styles.card_body}>
        <View className={styles.card_progres}>
          <Text>查看官网</Text>
          <AtProgress percent={25} isHidePercent />
        </View>
        <View className={styles.card_progres}>
          <Text>查看名片</Text>
          <AtProgress percent={34} isHidePercent />
        </View>
        <View className={styles.card_progres}>
          <Text>保留电话</Text>
          <AtProgress percent={49} isHidePercent />
        </View>
      </View>
    )

    return (
      <View>
        <View className={styles.card}>
          <View className={styles.card_head} onClick={this.toggle}>
            <Text>张三</Text>
            <AtIcon
              value={this.state.isOpen ? 'chevron-up' : 'chevron-down'}
              size='10'
              color='#F00'
            />
          </View>
          {this.state.isOpen && body}
        </View>
      </View>
    )
  }
}
