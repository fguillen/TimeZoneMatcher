import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  timeZone: null,

  actions: {
    toggleActiveHour(activeHour) {
      activeHour.toggleProperty('active');
    }
  }

});
