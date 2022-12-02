import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  items = [
    { isDone: false, label: 'zjeść jajka' },
    { isDone: true, label: 'umyć auto' },
    { isDone: false, label: 'kupić Macbooka' },
    { isDone: true, label: 'napisać apkę' },
  ];
}
