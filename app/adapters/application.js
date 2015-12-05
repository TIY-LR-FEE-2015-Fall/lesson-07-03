import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://lr-books.herokuapp.com',
  // host: 'http://librarymanager.apphb.com',

  namespace: 'api',
});
