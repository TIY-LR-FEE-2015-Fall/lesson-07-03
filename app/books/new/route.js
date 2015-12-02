import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // Make a new book but don't save it yet
    return this.store.createRecord('book');
  },
});
