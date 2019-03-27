import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import styles from './card.module.scss'
import { AtAvatar, AtIcon } from 'taro-ui'

export interface IState {
  showBtn: boolean
}

export default class Card extends Component<{}, IState> {
  constructor() {
    super(...arguments)
    this.state = { showBtn: false }
  }

  toggle = e => {
    e.stopPropagation()
    this.setState(prevState => {
      return {
        showBtn: !prevState.showBtn
      }
    })
  }

  render() {
    const btns = (
      <View className={styles.btns}>
        <Button>
          <AtIcon value='add' size='10' color='#F00' />
          <Text>新建任务</Text>
        </Button>
        <Button>
          <AtIcon value='add' size='10' color='#F00' />
          <Text>加商机</Text>
        </Button>
        <Button>
          <AtIcon value='add' size='10' color='#F00' />
          <Text>发消息</Text>
        </Button>
      </View>
    )

    return (
      <View className={styles.card}>
        <View onClick={this.toggle}>
          <View className={styles.head}>
            <View>
              <AtAvatar size='small' image='https://jdc.jd.com/img/200' />
              <Text>Tom</Text>
            </View>
            <AtIcon
              value={this.state.showBtn ? 'chevron-up' : 'chevron-down'}
              size='10'
              color='#F00'
            />
          </View>
          <View className={styles.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            modi dolorum dicta animi aspernatur omnis nemo ratione, molestiae a
            voluptates explicabo ad sapiente itaque fugit mollitia, consectetur
            blanditiis distinctio! Sapiente.
          </View>
        </View>
        {this.state.showBtn ? btns : null}
      </View>
    )
  }
}
