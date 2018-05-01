import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  milestoneComments: computed.alias('model.milestones.@each.comments'),
  combinedComments: computed('model.comments.[]', 'milestoneComments.[]', function() {
    let comments = [];

    this.get('model.comments').forEach((c) => {
      comments.pushObject(c);
    });

    this.get('model.milestones').forEach((m) => {
      m.get('comments').forEach((c) => {
        comments.pushObject(c);
      });
    });

    return comments;
  })
});
