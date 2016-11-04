import Ember from 'ember';

export default Ember.Component.extend({
  saveQuestion: Ember.inject.service(),
  actions: {
    add(question) {
      this.get('saveQuestion').add(question);
    }
  }
});
