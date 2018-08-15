(function () {

    'use strict';
  
    angular
      .module('app')
      .controller('CustomerHotController', customerHotController);
  
      customerHotController.$inject = ['authService', 'customerService'];
  
    function customerHotController(authService, customerService) {
  
      var vm = this;
      vm.auth = authService;
      vm.customer = customerService;
  
    }
  
  })();