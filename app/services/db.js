import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  timeZones: null,
  hoursList: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],

  initTimeZones() {
    this.set('timeZones', []);

    this.addTimeZone("0");
  },

  addTimeZone(utfDifference) {
    let timeZone =
      this.get('store').createRecord('timeZone', {
        utfDifference: utfDifference
      });

    this.get('timeZones').pushObject(timeZone);
    this.recalculateIsAMatchHours();
  },

  removeTimeZone(timeZone) {
    this.get('timeZones').removeObject(timeZone);
    this.recalculateIsAMatchHours();
  },

  recalculateIsAMatchHours() {
    this.get('hoursList').forEach((hour, index) => {
      let isAMatch = this.get('timeZones').every((timeZone) => timeZone.get('activeHoursWithSpan').objectAt(index).get('active'));
      this.get('timeZones').forEach((timeZone) => timeZone.get('activeHoursWithSpan').objectAt(index).set('isAMatch', isAMatch));
    });
  },
});
