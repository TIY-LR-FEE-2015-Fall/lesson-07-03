import DS from 'ember-data';

/**
 * Book Model
 */
export default DS.Model.extend({
  title: DS.attr('string'),
  year: DS.attr('number'),
  isbn: DS.attr('string'),
  author: DS.attr('string'),
  checkedInAt: DS.attr('date'),
  checkedOutAt: DS.attr('date'),

  /**
   * This book contains many checkIns
   */
  checkIns: DS.hasMany('check-in', {async: true}),
});
