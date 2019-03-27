import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './action.module.scss'
import { AtIcon } from 'taro-ui'

export default class Action extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    const card = (
      <View className={styles.card}>
        <View className={styles.card_item}>
          <AtIcon value='clock' size='30' color='#F00' />
          <View className={styles.action}>
            <Text>打电话</Text>
            <Text className={styles.num}>12</Text>
          </View>
        </View>
        <View className={styles.card_item}>
          <AtIcon value='clock' size='30' color='#F00' />
          <View className={styles.action}>
            <Text>打电话</Text>
            <Text className={styles.num}>12</Text>
          </View>
        </View>
        <View className={styles.card_item}>
          <AtIcon value='clock' size='30' color='#F00' />
          <View className={styles.action}>
            <Text>打电话</Text>
            <Text className={styles.num}>12</Text>
          </View>
        </View>
        <View className={styles.card_item}>
          <AtIcon value='clock' size='30' color='#F00' />
          <View className={styles.action}>
            <Text>打电话</Text>
            <Text className={styles.num}>12</Text>
          </View>
        </View>
      </View>
    )

    const listItem = (
      <View className={styles.list_item}>
        <View>
          <AtIcon value='clock' size='30' color='#F00' />
          <Text>查看名片</Text>
        </View>
        <Text>23</Text>
      </View>
    )

    return (
      <View>
        {card}
        {listItem}
      </View>
    )
  }
}
