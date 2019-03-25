import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import styles from './card.module.scss'

export default class Card extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return <View className={styles.card}>卡片</View>
  }
}
