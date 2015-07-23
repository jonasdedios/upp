(function (app) {
  'use strict';
  
  app.controller('SimpleArrayCtrl', ['$scope', function SimpleArrayCtrl($scope) {
    // partes
    $scope.partes = ['MENTE', 'OJOS', 'CUELLO', 'ESPALDA', 'MUÑECAS', 'RODILLAS', 'TOBILLOS'];
    
    
      
    // selected partes
    $scope.selection = [];
    
    // toggle selection for a given zona by name
    $scope.toggleSelection = function toggleSelection(partesCuerpo) {
      var idx = $scope.selection.indexOf(partesCuerpo);
      
      // is currently selected
      if (idx > -1) {
        $scope.selection.splice(idx, 1);
      }
      
      // is newly selected
      else {
        $scope.selection.push(partesCuerpo);
      }
    };
  }]);
  
  app.controller('ObjectArrayCtrl', ['$scope', 'filterFilter', function ObjectArrayCtrl($scope, filterFilter) {
    // partes
    $scope.partes = [
      { name: 'MENTE',    selected: false },
      { name: 'OJOS',     selected: false },
      { name: 'CUELLO',   selected: false },
      { name: 'ESPALDA',  selected: false },
      { name: 'MUÑECAS',  selected: false },
      { name: 'RODILLAS', selected: false },
      { name: 'TOBILLOS', selected: false }
    ];
    
    // selected partes
    $scope.selection = [];
    
    // helper method
    $scope.seleccionarParte = function selecionarParte() {
      return filterFilter($scope.partes, { selected: true });
    };
    
    // watch partes for changes
    $scope.$watch('partes|filter:{selected:true}', function (nv) {
      $scope.selection = nv.map(function (zona) {
        return zona.name;
      });
    }, true);
  }]);
  
  /**
   * custom filter
   */
  app.filter('parteseleccion', ['filterFilter', function (filterFilter) {
    return function parteseleccion(input, prop) {
      return filterFilter(input, { selected: true }).map(function (zona) {
        return zona[prop];
      });
    };
  }]);
})(angular.module('app', []));