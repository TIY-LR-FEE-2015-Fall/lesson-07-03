import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // Ask the store for all book models
    return this.store.findAll('book');
  },
});
