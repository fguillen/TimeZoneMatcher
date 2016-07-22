import Ember from 'ember';
import RegisterDbServiceInitializer from 'time-zones-matcher/initializers/register-db-service';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | register db service', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  RegisterDbServiceInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
