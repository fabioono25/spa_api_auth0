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
    vm.customers = {}
    vm.showBlockedWarning = false

    vm.getBasicCustomers = function() {
      const customers = vm.customer.getBasicCustomers()
      vm.clearFields()

      customers.then(function (response){
        vm.showBlockedWarning = response.status === 401
        vm.customers.data = response.data
      })
    }
    
    vm.getHotCustomers = function() {
      const customers = vm.customer.getHotCustomers()
      vm.clearFields()

      customers.then(function (response){
        vm.showBlockedWarning = response.status === 401
        vm.customers.data = response.data
      })
    }

    vm.clearFields = function(){
      vm.customers = {}
    }
  }
})()