import Ember from 'ember';
import TimeZone from 'time-zones-matcher/models/time-zone';

export default Ember.Service.extend({
  timeZones: null,

  init() {
    this._super(...arguments);

    this.set('timeZones', []);

    this.addTimeZone("0");
    this.addTimeZone("+2");
    this.addTimeZone("-3");
  },

  addTimeZone(utfDifference) {
    let timeZone = TimeZone.create({
      utfDifference: utfDifference
    });

    this.get('timeZones').pushObject(timeZone);
  }
});
