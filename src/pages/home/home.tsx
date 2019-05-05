import Taro, { Component, PageConfig } from '@tarojs/taro'
import { View, Button, ScrollView } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import styles from './home.module.scss'
import './reset.scss'
import { AtIcon } from 'taro-ui'

export interface HomeProps {
  // ...
}

@observer
export default class Home extends Component<HomeProps, {}> {
  config: PageConfig = {
    navigationBarTitleText: '记账'
  }

  constructor() {
    super(...arguments)
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <ScrollView scrollY className='home-container'>
        <View className={styles.home_header}>
          <View className={styles.home_left}>
            <View>2019年</View>
            <View>04月</View>
          </View>
          <View className={styles.home_right}>
            <View>
              <View>收入</View>
              <View>0</View>
            </View>
            <View>
              <View>支出</View>
              <View>0</View>
            </View>
          </View>
        </View>

        <Button className={styles.add_record_btn}>
          <AtIcon value='add' size='20' color='#fff' />
        </Button>
      </ScrollView>
    )
  }
}
