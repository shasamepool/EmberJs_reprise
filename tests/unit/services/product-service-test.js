import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | product-service', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:product-service');
    assert.ok(service);
  });
});
