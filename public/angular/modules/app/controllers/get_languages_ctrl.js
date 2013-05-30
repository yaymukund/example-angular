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

            $location.path('/finalize');
        };
    });
