import { observable, computed, action } from 'mobx'
import Taro from '@tarojs/taro'

export interface ITabStore {
  current: number
  activePage: string
  changeTab: (idx: number) => void
}

class TabStore implements ITabStore {
  readonly pages = ['/pages/index/index', '/pages/user/user']

  @observable current = 0

  @computed get activePage(): string {
    return this.pages[this.current]
  }

  @action.bound
  changeTab(idx) {
    this.current = idx

    console.log(this.activePage, '=====ac')

    Taro.redirectTo({
      url: this.activePage
    })
  }
}

export default new TabStore()
