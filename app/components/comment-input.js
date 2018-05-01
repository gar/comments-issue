import Component from '@ember/component';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  store: service(),

  actions: {
    saveComment(event) {
      let textarea = $(event.target).closest('.comment-wrapper').find('textarea');

      const text = textarea.val();
      let comment = this.get('store').createRecord('comment', { text: text });
      this.get('commentable.comments').pushObject(comment);

      textarea.val('');
    }
  }
});
