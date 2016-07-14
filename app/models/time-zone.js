export default Ember.Object.extend({
  utfDifference: null,
  activeHours: Ember.computed(function(){
    return [
      Ember.Object.create({ 'hour': '00', 'active': false }),
      Ember.Object.create({ 'hour': '01', 'active': false }),
      Ember.Object.create({ 'hour': '02', 'active': false }),
      Ember.Object.create({ 'hour': '03', 'active': false }),
      Ember.Object.create({ 'hour': '04', 'active': false }),
      Ember.Object.create({ 'hour': '05', 'active': false }),
      Ember.Object.create({ 'hour': '06', 'active': false }),
      Ember.Object.create({ 'hour': '07', 'active': false }),
      Ember.Object.create({ 'hour': '08', 'active': false }),
      Ember.Object.create({ 'hour': '09', 'active': true }),
      Ember.Object.create({ 'hour': '10', 'active': true }),
      Ember.Object.create({ 'hour': '11', 'active': true }),
      Ember.Object.create({ 'hour': '12', 'active': true }),
      Ember.Object.create({ 'hour': '13', 'active': true }),
      Ember.Object.create({ 'hour': '14', 'active': true }),
      Ember.Object.create({ 'hour': '15', 'active': true }),
      Ember.Object.create({ 'hour': '16', 'active': true }),
      Ember.Object.create({ 'hour': '17', 'active': true }),
      Ember.Object.create({ 'hour': '18', 'active': false }),
      Ember.Object.create({ 'hour': '19', 'active': false }),
      Ember.Object.create({ 'hour': '20', 'active': false }),
      Ember.Object.create({ 'hour': '21', 'active': false }),
      Ember.Object.create({ 'hour': '22', 'active': false }),
      Ember.Object.create({ 'hour': '23', 'active': false })
    ];
  }),
  activeHoursWithSpan: Ember.computed('utfDifference', function(){
    let activeHoursSpaned = this.get('activeHours').slice(0);

    let arrayRotate =
      function(arr, reverse){
        if(reverse)
          arr.unshift(arr.pop());
        else
          arr.push(arr.shift());
        return arr;
      }

    let span = parseInt(this.get('utfDifference'));
    let spanAbsolute = Math.abs(span);
    let reverse = span < 0;

    _.times(spanAbsolute, function(){ arrayRotate(activeHoursSpaned, reverse) });

    return activeHoursSpaned;
  })

});
