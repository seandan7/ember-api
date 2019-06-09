import Ember from 'ember';

export default Ember.Route.extend({
    ajax: Ember.inject.service(),
    queryParams: {
        page: {
            refreshModel: true
        },
    },
    model(params) {
        return this.get('ajax').request('https://jsonplaceholder.typicode.com/posts').then((response) => {
            let pageNumber = 0;
            for (let i = 0; i < response.length; i++ ) {
                if (i % 10 === 0  && i !== 0) {
                    pageNumber++;
                }
                response[i].pageToShowOn = pageNumber;
            }
            return response;
        });
    }
});

