import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked items = [
    { isDone: false, label: 'zjeść jajka' },
    { isDone: true, label: 'umyć auto' },
    { isDone: false, label: 'kupić Macbooka' },
    { isDone: true, label: 'napisać apkę' },
  ];

  @action
  onInputValue(event) {
    this.newTaskValue = event.target.value;
  }

  @action
  newTask(event) {
    event.preventDefault();
    this.items = [
      ...this.items,
      {
        isDone: false,
        label: this.newTaskValue,
      },
    ];
  }
}
