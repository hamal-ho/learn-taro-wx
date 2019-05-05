import Taro, { Component, PageConfig } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import styles from './user.module.scss'
import './reset.scss'
import ComTabs from '@/components/com-tabs/com-tabs'

export interface UserProps {
  // ...
}

@observer
export default class User extends Component<UserProps, {}> {
  config: PageConfig = {
    navigationBarTitleText: '我的'
  }

  constructor() {
    super(...arguments)
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View>
        <View>
          User标题 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique ipsum quas doloremque ex voluptatibus, deserunt, deleniti
          explicabo delectus, velit nihil iste temporibus aspernatur rerum
          fugiat veniam nulla sint officia inventore.
        </View>
      </View>
    )
  }
}
