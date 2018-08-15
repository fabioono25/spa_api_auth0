(function () {

    'use strict';
  
    angular
      .module('app')
      .controller('CustomerController', customerController);
  
    customerController.$inject = ['authService', 'customerService'];
  
    function customerController(authService, customerService) {
  
      var vm = this;
      vm.auth = authService;
      vm.customer = customerService;
    }

  })();