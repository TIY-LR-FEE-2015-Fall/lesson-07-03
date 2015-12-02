import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  something: 'heyo',

  submit(ev) {
    ev.preventDefault();

    var data = this.getProperties('title', 'author', 'isbn', 'year');

    this.sendAction('onsubmit', data);
  },
});
