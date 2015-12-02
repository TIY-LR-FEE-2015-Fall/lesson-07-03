import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  year: DS.attr('number'),
  isbn: DS.attr('string'),
  author: DS.attr('string'),
  checkedInAt: DS.attr('date'),
  checkedOutAt: DS.attr('date'),
});
