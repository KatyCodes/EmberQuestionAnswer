import Ember from 'ember';

export default Ember.Component.extend({
  questionHeader: Ember.computed('question.author', 'question.content', function() {
   return this.get('question.content') + ' by: ' + this.get('question.author');
 }),
});
