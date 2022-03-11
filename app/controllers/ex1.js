import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class Ex1Controller extends Controller {

  @tracked leText = 'Il était une fois il y a fort longtemps';
  noteModifier = 'Il était une fois il y a fort longtemps';

  get classTailleText(){
    if(this.leText.length <= 30)
      return 'bg-success';
    if(this.leText.length <= 70)
      return 'bg-warning';
    else
      return 'bg-danger';
  }

  @action effacerLeText() {
    this.leText = '';
  }

  get nbCharRestant() {
    return 100 - this.leText.length;
  }

  get estSave(){
    if(this.leText == this.noteModifier)
      return false;
    return true;
  }
}
