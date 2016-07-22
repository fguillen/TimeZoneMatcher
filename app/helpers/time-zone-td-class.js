import Ember from 'ember';

export function timeZoneTdClass(params/*, hash*/) {
  let activeHour = params[0];

  if(activeHour.get('isAMatch')){
    return 'info';
  } else if(activeHour.get('active')) {
    return 'success';
  } else {
    return 'danger';
  }
}

export default Ember.Helper.helper(timeZoneTdClass);
