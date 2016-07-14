import Ember from 'ember';
import TimeZone from 'time-zones-matcher/models/time-zone';

export default Ember.Service.extend({
  timeZones: null,
  hoursList: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],

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
