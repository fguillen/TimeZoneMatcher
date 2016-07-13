import { moduleForModel, test } from 'ember-qunit';

moduleForModel('time-zone', 'Unit | Model | time zone', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
