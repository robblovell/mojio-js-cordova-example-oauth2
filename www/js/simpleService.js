angular.module('starter.services2', [])

    .factory('service1',
         function() {

            var function1= function(){
                return 'hi';
            };


            return {
                function1: function1
            };
        }
    );