import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | ex1', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('ex1', {});
    assert.ok(model);
  });
});
