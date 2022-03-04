import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, get } from '@ember/object';

export default class Ex1Controller extends Controller {
  @tracked leText = 'Il était une fois il y a fort longtemps';

  @action effacerLeText() {
    this.leText = '';
  }

  @get nbCharRestant() {
    return 100 - this.leText.length;
  }
}
