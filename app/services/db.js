import Ember from 'ember';
import TimeZone from 'time-zones-matcher/models/time-zone';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  timeZones: null,
  timeZoneMatch: null,
  hoursList: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],

  initTimeZones() {
    this.set('timeZones', []);

    this.addTimeZone("0");
    this.addTimeZone("+2");
    this.addTimeZone("-3");

    // The Total Match
    let timeZoneMatch =
      this.get('store').createRecord('timeZone', {
        utfDifference: '0'
      });

    this.set('timeZoneMatch', timeZoneMatch);

    this.recalculateIsAMatchHours();
  },

  addTimeZone(utfDifference) {
    let timeZone =
      this.get('store').createRecord('timeZone', {
        utfDifference: utfDifference
      });

    this.get('timeZones').pushObject(timeZone);
  },

  recalculateIsAMatchHours() {
    this.get('timeZones').forEach((timeZone) => timeZone.recalculateIsAMatchHours());
  },

  recalculateTimeZoneMatch() {
    this.get('hoursList').forEach((hour, index) => {
      let active = this.get('timeZones').every((timeZone) => timeZone.get('activeHoursWithSpan')[index].get('active'));
      console.log('XXX: timeZoneMatch.setActiveHour', hour, active);
      this.get('timeZoneMatch').setActiveHour(hour, active);
    });
  }
});
