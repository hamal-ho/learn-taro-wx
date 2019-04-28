import { observable, action } from 'mobx'

export class TabStore {
  @observable tabsCurrent = 0


  @action
  changeTab(idx: number) {
    this.tabsCurrent = idx
    console.log('=====',idx);
    
  }
}

export const tabStore = new TabStore()
