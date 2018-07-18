import { observable, action } from 'mobx';

export default class GlobalStore {
  @observable appName = 'mbo';

  @action
  setAppName(val: string) {
    this.appName = val;
  }
}
