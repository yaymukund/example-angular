angular.module('app')
    .controller('GetNameCtrl', function($scope, $location, user) {
        $scope.user = user;

        $scope.submitName = function() {
            $location.path('/get-languages');
        };

        $scope.changeName = function() {
            setTimeout(function() {
                user.name = 'Snowy';
                console.log('Changed name to ' + user.name);
            }, 1000);
        };

        $scope.changeNameWithApply = function() {
            setTimeout(function() {
                user.name = 'Dogmatix';
                console.log('Changed name to ' + user.name);
                $scope.$apply();
            }, 1000);
        };
    });
