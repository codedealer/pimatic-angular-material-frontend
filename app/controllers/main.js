angular.module('PimaticApp').controller('MainController', function($scope, $mdSidenav, apiService){
    $scope.init = function(){
        /*var socket = io.connect('http://localhost:8080', {
            query: 'username=admin&password=admin'
        });

        socket.on('connect', function(){
            console.log('connect');
            socket.emit('test', {query:1});
        })*/

        apiService.init();
        $scope.pages = apiService.getPages();
        $scope.devices = apiService.getDevices();
        $scope.variables = apiService.getVariables();
    };

    $scope.getDevice = function(id){
        var device = null
        angular.forEach($scope.devices, function(value){
            if(value.id == id) device = value;
        });
        return device;
    };



    $scope.toggleMenu = function(){
        $mdSidenav('left').toggle();
    }

    $scope.init();
});