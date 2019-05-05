import { observable, action } from 'mobx'



export class CounterStore {
  @observable counter = 0

  @action.bound
  changeCounter(idx: number) {
    this.counter = idx
    console.log(this.counter, '======this.counter')
  }
}

export const counterStore = new CounterStore()

