import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // Make a new book but don't save it yet
    return this.store.createRecord('book');
  },

  actions: {
    createNewBook(data) {
      // Grab the book for our current route
      var book = this.modelFor('books.new');

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
