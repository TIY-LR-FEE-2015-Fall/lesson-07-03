import DS from 'ember-data';

/**
 * CheckIn Model
 */
export default DS.Model.extend({
  /**
   * Properties for our model
   */
  checkedInAt: DS.attr('date'),
  checkedOutAt: DS.attr('date'),

  /**
   * Set up the relationship to a book
   */
  book: DS.belongsTo('book'),
});
