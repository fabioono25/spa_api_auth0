(function () {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', homeController)

  homeController.$inject = ['authService','customerService']

  function homeController(authService, customerService) {
    const vm = this
    vm.auth = authService
    vm.customer = customerService
    vm.customers = []

    vm.getBasicCustomers = function() {
      const customers = vm.customer.getBasicCustomers()

      customers.then(function (data){
        vm.customers = data
      })
    }
    
    vm.getHotCustomers = function() {
      const customers = vm.customer.getHotCustomers()

      customers.then(function (data){
        vm.customers = data
      })
    }    
  }
})()