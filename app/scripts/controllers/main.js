'use strict';

/**
 * @ngdoc function
 * @name mockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mockApp
 */
angular.module('mockApp')
  .controller('MainCtrl', function ($scope) {
    $scope.contact = false;
    $scope.MoveToContact = function() {
      console.log("zzzz....zzz");
    };
    $scope.data = [
      {
        name:"מחשבים",
        products: 4,
        saleIndex: 2,
        mainImage:"https://pisces.bbystatic.com/BestBuy_US/store/ee/2015/com/pm/nav_desktops_1115.jpg;maxHeight=288;maxWidth=520",
        itemImage:"http://images.computerhistory.org/timeline/timeline_computers_1983.lisa.jpg"
      },
      {
        name:"טלפונים",
        products: 10,
        saleIndex: 6,
        mainImage:"http://www.ywcancin.org/atf/cf/%7B6C13D2EE-5ADB-4290-8164-67CDE6DEDE7D%7D/Cell%20Phones%20&%20Smartphones.jpg",
        itemImage:"https://usercontent2.hubstatic.com/1397827.jpg"
      },
      {
        name:"קשקושים",
        products: 8,
        saleIndex: 4,
        mainImage:"http://www.explorecarrental.com/images/party.jpg",
        itemImage:"http://hireking.co.nz/image/data/Party%20Supplies.jpg"
      },
    ];
    $scope.getNumber = function(num) {
      return new Array(num);
    };
  });
