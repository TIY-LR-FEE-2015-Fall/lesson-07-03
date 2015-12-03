import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // Get the book model with the id of params.id
    return this.store.findRecord('book', params.id);
  },

  actions: {
    saveBook(data) {
      // Grab the book for our current route
      var book = this.modelFor('books.edit');

      // Set the data on our book model
      book.setProperties(data);

      // Save book to server as a new book
      book.save().then(() => {
        // Leave the new book form
        this.transitionTo('books.index');
      });
    },
  },
});
