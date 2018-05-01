import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteComment(comment) {
      comment.destroyRecord();
    }
  }
});
