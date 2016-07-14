import Ember from 'ember';

export default Ember.Component.extend({
  db: Ember.inject.service('db'),

  tagName: 'tr',
  timeZone: null,
  utfDifference: null,

  init() {
    this._super(...arguments);
    this.set('utfDifference', this.get('timeZone.utfDifference'));
  },

  actions: {
    updateUtfDifference() {
      this.set('timeZone.utfDifference', this.get('utfDifference'));
      this.get('db').recalculateTimeZoneMatch();
    },

    toggleActiveHour(activeHour) {
      activeHour.toggleProperty('active');
      this.get('db').recalculateTimeZoneMatch();
    }
  }

});
