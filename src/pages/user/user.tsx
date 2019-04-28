import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { observable, action } from 'mobx'
import styles from './user.module.scss'
import './reset.scss'

export interface UserProps {
  // ...
}

@observer
export default class User extends Component<UserProps, {}> {
  @observable title =  'User标题'

  constructor() {
    super(...arguments)
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View className='user-container'>
        <View>User 组件</View>
      </View>
    )
  }
}
