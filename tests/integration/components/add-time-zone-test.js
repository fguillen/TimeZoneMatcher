import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-time-zone', 'Integration | Component | add time zone', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{add-time-zone}}`);

  assert.equal(this.$('a#addTimeZoneLink').text().trim(), 'Add TimeZone');
});
