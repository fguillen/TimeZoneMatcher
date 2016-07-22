import Ember from 'ember';

export default Ember.Controller.extend({
  db: Ember.inject.service('db'),
  init: function() {
    this.get('db').initTimeZones();
  }
  // actions: {
  //   toggleBody() {
  //     this.toggleProperty('isExpanded');
  //   }
  // }
});