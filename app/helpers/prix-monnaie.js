import { helper } from '@ember/component/helper';

export default helper(function prixMonnaie(param /*, named*/) {
  let [prix, monnaie] = param;

  return prix+' '+monnaie;
});
