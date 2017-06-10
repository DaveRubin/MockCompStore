'use strict';

/**
 * @ngdoc function
 * @name mockApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the mockApp
 */
angular.module('mockApp')
  .controller('ContactCtrl', function ($scope) {
    console.log("ZZZ");
    $scope.master = {firstName: "", lastName: "",email:""};
    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
  });
