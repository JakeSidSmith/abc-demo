'use strict';

var app = angular.module('abcApp');

app.controller('MainCtrl', ['$scope', 'ABC', function ($scope, ABC) {

  $scope.deleteRow = function () {
    $scope.settings.data = $scope.settings.data.splice(0, $scope.settings.data.length-1);
  };

  $scope.types = [
    {name: 'Line', id: 'line'},
    {name: 'Spline', id: 'spline'},
    {name: 'Area', id: 'area'},
    {name: 'Bar', id: 'bar'}
  ];

  $scope.data = [
    ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    ['Group 1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Group 2', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Group 3', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Group 4', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Group 5', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  // Generate random data
  angular.forEach($scope.data, function (row, x) {
    if (x > 0) {
      angular.forEach(row, function (cell, y) {
        if (y > 0) {
          $scope.data[x][y] = parseInt((Math.random()/* - 0.25*/ - 0.5) * 200);
        }
      });
    }
  });

  $scope.hovering = {
    x: -1,
    y: -1
  };

  $scope.colors = ['#d24949', '#e59648', '#4f8f47', '#316e93', '#684c8a'];

  $scope.setHovering = function (index, parentIndex) {
    $scope.hovering.x = index;
    $scope.hovering.y = parentIndex;
  };

  $scope.clearHovering = function () {
    $scope.hovering.x = -1;
    $scope.hovering.y = -1;
  };

  var transformValues = function (value) {
    value = parseFloat(value);
    if (value > 1 || value < -1) {
      value = value.toString().split('.')[0];
    }
    if (value < 0) {
      value = value.toString();
      return '-£' + value.substring(1, value.length);
    }
    return '£' + value;
  };

  $scope.settings = {
    resize: {
      width: true,
      height: false
    },
    data: ABC.transformData($scope.data),
    headers: ABC.transformHeaders($scope.data),
    title: {
      content: 'My Chart',
      size: 12,
      show: true
    },
    width: 700,
    height: 250,
    colors: $scope.colors,
    type: 'line',
    hovering: $scope.hovering,
    axis: {
      size: 12,
      x: [],
      y: []
    },
    transform: {
      yLabels: transformValues,
      xLabels: function (value) {
        return value + ' 2014';
      },
      popupLabels: function (value) {
        return value + ':';
      },
      popupValues: transformValues
    }
  };

}]);
