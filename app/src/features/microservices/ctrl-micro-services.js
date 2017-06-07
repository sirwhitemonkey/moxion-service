
angular.module('moxion.controllers')

    .controller('CtrlMicroServices',
    function ($scope, $log, $spinner, $constants, $window) {

        var logMsgPrefix = "CtrlMicroServices -> ";
        $log.debug(logMsgPrefix + ' created');

        $scope.event = {};
        $scope.spinner = $spinner;

        var url = $window.location.protocol + "//" +  $window.location.host;

        $scope.microservices = [
            {
                name: 'Asset',
                url: url + '/swagger/asset.json'
            },
            {
                name: 'MetaData',
                url: url + '/swagger/metadata.json'
            }
        ];


        $scope.errorHandler = function(data, status){
            $log.debug(logMsgPrefix + ' failed to load swagger: '+status);
        };
    });

