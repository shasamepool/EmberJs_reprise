import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { set, action } from '@ember/object';

export default class AccueilRoute extends Route {
  @service productService;

  // Hook executer dès le chargement de la route.
  // Hook particulier qui donne directement accès a l'objet return
  // dans le .hbs correspondant à cette route (template).
  model() {
    return this.productService;
  }

  // Quand on l'appel pour l'objet service passer en param, passe le champ 'active'
  // a l'inverse de sa précédente val.
  @action toggleActive(service) {
    set(service, 'active', !service.active);
  }
}
