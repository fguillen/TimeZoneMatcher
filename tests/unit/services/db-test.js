import { moduleFor, test } from 'ember-qunit';

moduleFor('service:db', 'Unit | Service | db', {
  // Specify the other units that are required for this test.
  needs: ['model:timeZone']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('initTimeZones()', function(assert) {
  let service = this.subject();
  assert.ok(true);
  assert.equal(service.get('timeZones'), null);

  Ember.run(() => {
    service.initTimeZones();
  });

  assert.equal(service.get('timeZones.length'), 1);
  assert.equal(service.get('timeZones.firstObject').get('utfDifference'), "0");
});

test('addTimeZone()', function(assert) {
  let service = this.subject();
  service.set('timeZones', []);

  assert.equal(service.get('timeZones.length'), 0);

  Ember.run(() => {
    service.addTimeZone("+10");
  });

  assert.equal(service.get('timeZones.length'), 1);
  assert.equal(service.get('timeZones.firstObject').get('utfDifference'), "+10");
});

test('removeTimeZone()', function(assert) {
  let service = this.subject();
  service.set('timeZones', []);

  Ember.run(() => {
    let timeZone =
      service.get('store').createRecord('timeZone', {
        utfDifference: "+10"
      });

    service.get('timeZones').pushObject(timeZone);

    assert.equal(service.get('timeZones.length'), 1);

    service.removeTimeZone(timeZone);

    assert.equal(service.get('timeZones.length'), 0);
  });
});

test('recalculateIsAMatchhour', function(assert) {
  assert.ok(false, 'test not implemented!!')
});

