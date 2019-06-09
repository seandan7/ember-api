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
            let pageNumber = 1;
            for (let i = 1; i < response.length; i++ ) {
                response[i].pageToShowOn = pageNumber;
                if (i % 10 == 0 ) {
                    pageNumber++;
                }
            }
            console.log(response);
            return response;
        });
    }
});

