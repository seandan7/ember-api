import Ember from 'ember';

export default Ember.Controller.extend({
    isExpanded: false,
    ajax: Ember.inject.service(),
    queryParams: ['page', 'limit'],
    page: 0,
    limit: 10,
    actions: {
        showPerson(userId, fullPost) {
            this.get('ajax').request('https://jsonplaceholder.typicode.com/users/' + userId).then((response) => {
                document.getElementById('modal__name').textContent = response.name;
                document.getElementById('modal__email').textContent = response.email;
                document.getElementById('modal__link').innerHTML = '<a href="https://' + response.website + '">Website</a>';

                document.getElementById('modal__post').textContent = fullPost;

                document.getElementById("modal").classList.add("show");
            })
        },
        closeModal() {
            document.getElementById("modal").classList.remove("show");
        },
        nextPage: function (modelLength) {

            if (this.page > modelLength / this.limit - 2) {
                alert("You've gone too far");
            } else {
                this.set('page', this.get('page') + 1);
            }
        },
        previousPage: function () {
            if (this.page < 1) {
                alert('no previous page');
                this.set('page', 0);
            } else {
                this.set('page', this.get('page') - 1);
            }
        }
    }
});