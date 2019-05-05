import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { observable, action } from 'mobx'
import styles from './record.module.scss'
import './reset.scss'

export interface RecordProps {
  // ...
}

@observer
export default class Record extends Component<RecordProps, {}> {
  @observable title =  'Record标题'

  constructor() {
    super(...arguments)
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View className='record-container'>
        <View>Record 组件</View>
      </View>
    )
  }
}
