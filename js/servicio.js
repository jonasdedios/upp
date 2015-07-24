app.controller('resultado', function($scope,zonasRecibidas ){
        
    $scope.zonas = zonasRecibidas.rutina 
    
    
    
})

app.service ('zonasRecibidas', [function (){
    
    this.rutina;
    
}] )