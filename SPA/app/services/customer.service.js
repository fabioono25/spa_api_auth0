(function () {

    'use strict';
  
    angular
      .module('app')
      .service('customerService', customerService);
  
    customerService.$inject = ['$http', '$q'];
  
    function customerService($http, $q) {
      var deferObject,
      getBasicCustomers = function() {
          
        var promise = 
        $http({
            method: 'GET',
            url: 'http://localhost:8080/customers',
            headers: {
              'Authorization': 'Bearer ' + localStorage["access_token"]
            },            
         }), deferObject = deferObject || $q.defer();
         
         promise.then(function (response){
            deferObject.resolve(response)
         },function (error){
            deferObject.resolve(error)
         });

         return deferObject.promise;
      },      
      getHotCustomers = function() {
        var promise = 
        $http({
          method: 'GET',
          url: 'http://localhost:8080/hotcustomers',
          headers: {
            'Authorization': 'Bearer ' + localStorage["access_token"]
          },            
        }), deferObject = deferObject || $q.defer();
        
        promise.then(function (response){
          deferObject.resolve(response)
        },function (error){
          deferObject.resolve(error)
        });

        return deferObject.promise;
      }
  
      return {
        getBasicCustomers,
        getHotCustomers
      }
    }
  })();
  