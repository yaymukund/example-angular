angular.module('app').factory('backend', function($http) {
    var exports = { BASE_URL: 'http://localhost:3000/rails/server' };

    // We would actually do something like:
    //
    // return $http.jsonp(BASE_URL + '/languages');
    exports.getLanguages = function() {
        return [
            {name: 'English'},
            {name: 'Tamil'},
            {name: 'Spanish'},
            {name: 'Ruby'},
            {name: 'Pirate'},
            {name: 'Love'}
        ];
    };

    exports.registerUser = function(user) {
        // This is where you'd do:
        //
        //   return $http.jsonp(BASE_URL + '/user?method=post', user)
        console.log('Registered user:');
        console.log(user);
    };

    return exports;
});
