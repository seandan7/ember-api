import Ember from 'ember';

export default Ember.Route.extend({
    ajax: Ember.inject.service(),
    queryParams: {
        page: {
            refreshModel: true
        },
    },
    model(params) {
        return this.get('ajax').request('https://jsonplaceholder.typicode.com/posts');
    }
});

