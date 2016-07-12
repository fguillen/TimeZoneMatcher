import Ember from 'ember';

export default Ember.Controller.extend({
  db: Ember.inject.service('db')
  // actions: {
  //   toggleBody() {
  //     this.toggleProperty('isExpanded');
  //   }
  // }
});