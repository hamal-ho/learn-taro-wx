import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Time from '../time'
import Action from '../action'
import Count from '../count'

type IState = {
  current: number
}

@inject('counterStore')
@observer
class Index extends Component<{}, IState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  componentWillMount() {}

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    const tabList = [{ title: '时间' }, { title: '行为' }, { title: '人' }]

    return (
      <AtTabs
        current={this.state.current}
        tabList={tabList}
        onClick={this.handleClick.bind(this)}
      >
        <AtTabsPane current={this.state.current} index={0}>
          <Time />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <Action />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <Count />
        </AtTabsPane>
      </AtTabs>
    )
  }
}

export default Index as ComponentType
