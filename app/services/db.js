import Ember from 'ember';

export default Ember.Service.extend({
  timeZones: null,

  init() {
    this._super(...arguments);

    this.set('timeZones', []);

    this.addTimeZone(0);
    this.addTimeZone(2);
    this.addTimeZone(-3);
  },

  addTimeZone(utfDifference) {
    this.get('timeZones').pushObject({
      utfDifference: utfDifference
    });
  }
});
