import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Veruca",
  content: "Why is the sky blue?",
  note: "I want to know",
}, {
  id: 2,
  author: "Mike",
  content: "How do I make the best dinner ever?",
  note: "My friend is coming home to visit.",
}, {
  id: 3,
  author: "Violet",
  content: "Why are some people color blind?",
  note: "I think I might be",
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
