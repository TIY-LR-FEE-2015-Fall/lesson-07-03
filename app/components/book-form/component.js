import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  // Set our starting values
  setStartingValues: Ember.on('init', function() {
    // Grab title, author, isbn, year from startingValues
    var startingValues = this.get('startingValues');

    var data = startingValues.getProperties('title', 'author', 'isbn', 'year');

    // Set title, author, isbn, year on current component
    this.setProperties(data);
  }),

  submit(ev) {
    ev.preventDefault();

    var data = this.getProperties('title', 'author', 'isbn', 'year');

    this.sendAction('onsubmit', data);
  },
});
