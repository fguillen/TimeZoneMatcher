import Ember from 'ember';

export default Ember.Component.extend({
  db: Ember.inject.service(),
  utfDifference: "0",

  actions: {
    addTimeZone() {
      this.get('db').addTimeZone(this.get('utfDifference'));
      Ember.$('#newTimeZoneModal').modal('hide');
    }
  }
});
