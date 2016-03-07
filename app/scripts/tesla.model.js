ar Artist = Backbone.Model.extend({
    defaults: {
        name: 'New Artist',
        birthday: 'January 1, 1970',
        hometown: 'Los Angeles, CA',
        favoriteColor: 'blue',
    }
});

var biggie = new Artist({ id: 1, name: 'Notorious BIG', birthday: 'May 21, 1972', hometown: 'Brooklyn, NY', favoriteColor: 'green' });
var mike = new Artist({ id: 2, name: 'Mike Jones', birthday: 'January 6, 1981', hometown: 'Houston, TX', favoriteColor: 'blue' });
var taylor = new Artist({ id: 3, name: 'Taylor Swift', birthday: 'December 13, 1989', hometown: 'Reading, PA', favoriteColor: 'red' });
