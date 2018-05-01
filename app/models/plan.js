import DS from 'ember-data';

export default DS.Model.extend({
  milestones: DS.hasMany('milestone'),
  comments: DS.hasMany('comment')
});
