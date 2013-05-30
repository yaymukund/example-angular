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

    return exports;
});
