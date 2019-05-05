import { observable, action } from 'mobx'

export interface ITabStore {
  current: number
  changeTab: (idx: number) => void
}

class TabStore implements ITabStore {
  @observable current = 0

  @action.bound
  changeTab(idx) {
    this.current = idx
    console.log(this.current, '=====this.current')
  }
}

export default new TabStore()
