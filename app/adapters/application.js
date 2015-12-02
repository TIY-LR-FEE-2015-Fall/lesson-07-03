import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://lr-books.herokuapp.com',

  namespace: 'api',
});
