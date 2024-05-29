
(function() {
    'use strict';
    angular.module('MyFirstApp', [])
    .controller('GridController', function($scope) {
        $scope.name1 = 'Cupcakes';
        $scope.name2 = 'Breads';
        $scope.name3 = 'Doughnuts';
        $scope.name4 = 'Cakes';
        $scope.name5 = 'Sweets';
        $scope.name6 = 'Danishes';
    })
    .controller('SidebarController', function($scope) {
        $scope.sidebarStyle = {
            width: '0'
        };

        $scope.openNav = function() {
            $scope.sidebarStyle.width = '250px';
        };

        $scope.closeNav = function() {
            $scope.sidebarStyle.width = '0';
        };
        });
    
    })();