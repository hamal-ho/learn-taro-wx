import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
// import { observable, action } from 'mobx'
import styles from './tabs.module.scss'
import './reset.scss'
import { AtTabBar } from 'taro-ui'
import { ITabStore } from 'src/store/tabStore'

@inject('tabStore')
@observer
class ComTabs extends Component<
  {
    tabStore: ITabStore
  },
  {}
> {
  constructor() {
    super(...arguments)
  }

  componentDidMount() {}

  componentWillUnmount() {}

  change(idx: number) {
    const {
      tabStore: { changeTab }
    } = this.props
    changeTab(idx)
  }

  render() {
    const {
      tabStore: { current }
    } = this.props
    return (
      <AtTabBar
        fixed
        tabList={[
          { title: '明细', iconType: 'calendar' },
          { title: '我的', iconType: 'user' }
        ]}
        onClick={this.change}
        current={current}
      />
    )
  }
}

export default ComTabs as any
