import Ember from 'ember';

export default Ember.Component.extend({
  saveQuestion: Ember.inject.service(),

  actions: {
    addToFavorites(question) {
      this.get('saveQuestion').add(question);
    },
  }
});
