(function () {

    'use strict';
  
    angular
      .module('app')
      .service('customerService', customerService);
  
    customerService.$inject = ['$http'];
  
    function customerService($http) {
     
      function getBasicCustomers() {
        
        $http.get('http://localhost:8080/customers', {
            headers: {
                "Authorization": 'Token token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1rUkJPVFJGTlROQ056QTRRa0ZEUmtJME5EVkNSVU5EUWpJMU0wTXhNa05GUlRReU5rSTJNZyJ9.eyJpc3MiOiJodHRwczovL2ZhYmlvb25vMjUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDViNzM3NWUxOWQ5MjUwNWQwMGMwYjhjYiIsImF1ZCI6Imh0dHA6Ly9hcGkuZXhhbXBsZS5jb20vY3VzdG9tZXIiLCJpYXQiOjE1MzQzMDQ3ODksImV4cCI6MTUzNDMwNTk4OSwiYXpwIjoiTEJ2akJYOGhCNzFPMjRkNU10Z0wwZElZNFRraFFUalQiLCJzY29wZSI6InJlYWQ6Y3VzdG9tZXJzIn0.mEh9v3YXu81BOhblatbfRTsgKpDmqUqRpyE-cbUKvAPMCCHXPvh0WbqqclUCnx7VvB2Sb_Pb_KJKTJ1ycdDdIewluQKV25DfwAfcYctkAUrpDMA6icQBWSDpm7f5lIi2YfdwTtmLoB8okmceHztUnzvKvAwg0SdcKPkBR4IJTgGIi4ezHlj2a2_O-V0Umz25ePFqJihtjP5UGtYvh2YfrRtZ1rPCikmpVTYV0RvxZRLMcN1VsMfiiJJpS6ScR7CXl6L9v14QgcWPEktcUC9QYnsSw6Lvf6idZAfPybpdBt_mr4VgQn4K3rp850TvWkbejdOb3nKVmW4ALEos4aQtEA"'
            }
          }).success(function(response){
            console.log(response)
            return response;
          }).error(function(err){
            console.log(err)
          });        

      }
      
      function getHotCustomers() {
        $http.get('http://localhost:8080/customersHot', {
            headers: {
                "Authorization": 'Token token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1rUkJPVFJGTlROQ056QTRRa0ZEUmtJME5EVkNSVU5EUWpJMU0wTXhNa05GUlRReU5rSTJNZyJ9.eyJpc3MiOiJodHRwczovL2ZhYmlvb25vMjUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDViNzM3NWUxOWQ5MjUwNWQwMGMwYjhjYiIsImF1ZCI6Imh0dHA6Ly9hcGkuZXhhbXBsZS5jb20vY3VzdG9tZXIiLCJpYXQiOjE1MzQzMDQ3ODksImV4cCI6MTUzNDMwNTk4OSwiYXpwIjoiTEJ2akJYOGhCNzFPMjRkNU10Z0wwZElZNFRraFFUalQiLCJzY29wZSI6InJlYWQ6Y3VzdG9tZXJzIn0.mEh9v3YXu81BOhblatbfRTsgKpDmqUqRpyE-cbUKvAPMCCHXPvh0WbqqclUCnx7VvB2Sb_Pb_KJKTJ1ycdDdIewluQKV25DfwAfcYctkAUrpDMA6icQBWSDpm7f5lIi2YfdwTtmLoB8okmceHztUnzvKvAwg0SdcKPkBR4IJTgGIi4ezHlj2a2_O-V0Umz25ePFqJihtjP5UGtYvh2YfrRtZ1rPCikmpVTYV0RvxZRLMcN1VsMfiiJJpS6ScR7CXl6L9v14QgcWPEktcUC9QYnsSw6Lvf6idZAfPybpdBt_mr4VgQn4K3rp850TvWkbejdOb3nKVmW4ALEos4aQtEA"'
            }
          }).success(function(response){
            console.log(response)
            return response;
          }).error(function(err){
            console.log(err)
          });        
      }
  
      return {
        getBasicCustomers,
        getHotCustomers
      }
    }
  })();
  