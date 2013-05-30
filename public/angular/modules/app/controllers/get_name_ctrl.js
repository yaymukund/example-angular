angular.module('app')
    .controller('GetNameCtrl', function($scope, $location, user) {
        $scope.user = user;

        $scope.submitName = function() {
            $location.path('/get-languages');
        };
    });
