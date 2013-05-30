angular.module('app').factory('user', function(backend) {
    var user = {};

    user.initialize = function() {
        user.languages = [];
    };

    user.addLanguage = function(language) {
        user.languages << language;
        // backend.addLanguage(user.login, language);
    };

    return user;
});


