(function (app) {
  'use strict';
  
  app.controller('guardaDatosCheck', ['$scope', function guardaDatosCheck($scope,zonasRecibidas) {
    // partes
    $scope.partes = ['video_mente.mov', 'video_ojos.mov', 'video_cuello.mov', 'video_espalda.mov', 'video_muñecas.mov', 'video_rodillas.mov', 'video_tobillos.mov'];
    
      /*$scope.zona.mente;
      $scope.zona.cuello;
      $scope.zona.espalda;
      $scope.zona.tobillos;*/
    

    
    
    /*$scope.partes = [
        {
            nombre:'mente',
            video:'video mente',
            información:'no definida',
            precauciones:'no definida',
            img:'ModelDataa1'
        },
        {
            nombre:'cuello',
            video:'video cuello',
            información:'no definida',
            precauciones:'no definida',
            img:'ModelDataa2'
        },
        {
            nombre:'espalda',
            video:'video espalda',
            información:'no definida',
            precauciones:'no definida',
            img:'ModelDataa3'
        },
        {
            nombre:'tobillos',
            video:'video tobillos',
            información:'no definida',
            precauciones:'no definida',
            img:'ModelDataa4'
        }
    ];*/
      
    
      
    // Partes seleccionadas
    $scope.selection = [];
    
    // selección de palanca para una zona determinada por su nombre
    $scope.toggleSelection = function toggleSelection(partesCuerpo) {
      var idx = $scope.selection.indexOf(partesCuerpo);
      
      // está seleccionado en ese momento
      if (idx > -1) {
        $scope.selection.splice(idx, 1);
      }
      
      // se acaba de seleccionar
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
    
    // Partes seleccionadas
    $scope.selection = [];
    
    // método de ayuda
    $scope.seleccionarParte = function selecionarParte() {
      return filterFilter($scope.partes, { selected: true });
    };
    
    // ver piezas para cambios
    $scope.$watch('partes|filter:{selected:true}', function (nv) {
      $scope.selection = nv.map(function (zona) {
        return zona.name;
      });
    }, true);
  }]);
    
    zonasRecibidas.rutina = $scope.selection;
  
  /**
   * filtro personalizado
   */
  app.filter('parteseleccion', ['filterFilter', function (filterFilter) {
    return function parteseleccion(input, prop) {
      return filterFilter(input, { selected: true }).map(function (zona) {
        return zona[prop];
      });
    };
  }]);
})(angular.module('app', []));