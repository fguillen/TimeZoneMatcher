import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params/*, hash*/) {
    let active = params[0];
    let isAMatch = params[1];

    if(isAMatch){
      return 'info';
    } else if(active) {
      return 'success';
    } else {
      return 'danger';
    }
  }
});