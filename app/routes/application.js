import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let plan = this.get('store').createRecord('plan');
    let m1 = this.get('store').createRecord('milestone');
    let m2 = this.get('store').createRecord('milestone');
    plan.get('milestones').pushObject(m1);
    plan.get('milestones').pushObject(m2);
    return plan;
  }
});
