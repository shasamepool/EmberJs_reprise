import Service from '@ember/service';
import { dProducts, dPromos } from 'tds/data/data';
import {tracked} from "@glimmer/tracking";
import { set, action } from '@ember/object';

export default class ProductServiceService extends Service {
  @tracked code;
  product = dProducts;
  promos = dPromos;

  get lesActif() {
    return this.product.filterBy('active', true);
  }

  get nbActif() {
    return this.lesActif.length;
  }

  get coutPourActif() {
    let total = (somme, product) => product.price + somme;
    return this.lesActif.reduce(total, 0);
  }
}
