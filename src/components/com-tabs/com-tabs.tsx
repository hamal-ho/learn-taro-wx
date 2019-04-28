import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { observable, action } from 'mobx'
import styles from './tabs.module.scss'
import './reset.scss'
import { AtTabBar } from 'taro-ui'
import { TabStore } from '../../store/tabStore'
import { ComponentType } from 'react'

export interface ComTabsProps {
  // ...
  tabStore: TabStore
}

@inject('tabStore')
@observer
class ComTabs extends Component<ComTabsProps, {}> {
  constructor() {
    super(...arguments)
  }

  componentDidMount() {
    console.log(this.props.tabStore, 'props-========props')
  }

  componentWillUnmount() {}

  render() {
    return (
      <AtTabBar
        fixed
        tabList={[
          { title: '明细', iconType: 'calendar' },
          { title: '我的', iconType: 'user' }
        ]}
        onClick={this.props.tabStore.changeTab}
        current={this.props.tabStore.tabsCurrent}
      />
    )
  }
}

export default ComTabs as ComponentType
