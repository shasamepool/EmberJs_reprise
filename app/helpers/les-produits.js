import { helper } from '@ember/component/helper';

export default helper(function lesProduits(param /*, named*/) {
  let [nbServicesActif] = param;
  if (nbServicesActif >= 2) return '4 services selectionnés';
  if (nbServicesActif == 1) return '1 service selectionné';

  return 'Aucun service selectionné';
});
