import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ListItemComponment extends Component {
  @action
  async onToggleIsDone() {
    this.args.item.isDone = !this.args.item.isDone;
    await this.args.item.save();
  }

  @action
  async onRemoveTask() {
    await this.args.item.destroyRecord();
  }
}
