angular.module('app')
    .controller('GetLanguagesCtrl', function($scope, $location, backend, user) {
        $scope.user = user;
        $scope.languages = backend.getLanguages();

        $scope.submitLanguages = function() {
            user.languages = [];

            $scope.languages.forEach(function(language) {
                console.log(language);
                if (!!language.selected) {
                    user.languages.push(language);
                }
            });

            backend.registerUser({
                name: user.name,
                login: user.login,
                password: user.password,
                languages: user.languages
            });

            $location.path('/finalize');
        };
    });
