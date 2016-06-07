'use strict';

/**
 * @ngdoc function
 * @name sendstormApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sendstormApp
 */
angular.module('sendstormApp')
    .controller('DashboardCtrl', ['$scope', function($scope) {
        $scope.contactsTableData = [{
            "id": "5752e1c1bc24acd4087c8654",
            "valid": false,
            "name": "Bird Parks",
            "phone_number": "+1 (818) 500-3096",
            "phone_code": 1,
            "status": "UNRESOLVED"
        }, {
            "id": "5752e1c1f9da8cd161aa1638",
            "valid": false,
            "name": "Butler Wilcox",
            "phone_number": "+1 (920) 457-3952",
            "phone_code": 1,
            "status": "UNRESOLVED"
        }, {
            "id": "5752e1c142f75a3c736285cd",
            "valid": true,
            "name": "Solis Graham",
            "phone_number": "+1 (907) 531-2778",
            "phone_code": 1,
            "status": "UNRESOLVED"
        }, {
            "id": "5752e1c163e482d497fe3435",
            "valid": false,
            "name": "Bean Rosario",
            "phone_number": "+1 (879) 594-3428",
            "phone_code": 1,
            "status": "UNRESOLVED"
        }, {
            "id": "5752e1c1b7bb85ea62243ebf",
            "valid": true,
            "name": "Chandler Swanson",
            "phone_number": "+1 (849) 436-3537",
            "phone_code": 1,
            "status": "UNRESOLVED"
        }, {
            "id": "5752e1c1435752138482eaa8",
            "valid": false,
            "name": "Traci Carlson",
            "phone_number": "+1 (936) 501-3493",
            "phone_code": 1,
            "status": "UNRESOLVED"
        }, {
            "id": "5752e1c16c5302590eef85b5",
            "valid": false,
            "name": "Bright Johnson",
            "phone_number": "+1 (940) 500-3474",
            "phone_code": 1,
            "status": "UNRESOLVED"
        }, {
            "id": "5752e1c1c4f04142e69485bc",
            "valid": true,
            "name": "Elena Aguirre",
            "phone_number": "+1 (962) 486-2071",
            "phone_code": 1,
            "status": "UNRESOLVED"
        }, {
            "id": "5752e1c1f93c865ee81ec102",
            "valid": false,
            "name": "Nora Mcdonald",
            "phone_number": "+1 (942) 584-3304",
            "phone_code": 1,
            "status": "UNRESOLVED"
        }];

        $scope.campaignsTableData = [{
            "id": "5752e4719d2078bd3152d571",
            "name": "SENTIA",
            "launch_url": "http://launch.url.com"
        }, {
            "id": "5752e471e7d8240d444a069c",
            "name": "AUTOGRATE",
            "launch_url": "http://launch.url.com"
        }, {
            "id": "5752e47152b4b0da50b998d4",
            "name": "HOTCAKES",
            "launch_url": "http://launch.url.com"
        }, {
            "id": "5752e47145584de7a52b35bc",
            "name": "AEORA",
            "launch_url": "http://launch.url.com"
        }, {
            "id": "5752e4714a9e6d92ff7d8704",
            "name": "CYTREX",
            "launch_url": "http://launch.url.com"
        }];

        $scope.operationalContactsTableData = [{
            "id": "5752e4719d2078bd3152d571",            
            "contact_id": "5752e1c1bc24acd4087c8654",
            "campaign_id": "5752e4719d2078bd3152d571",
            "targeted": false,
            "ignored": false
        }, {
            "id": "5752e471e7d8240d444a069c",            
            "contact_id": "5752e1c1f9da8cd161aa1638",
            "campaign_id": "5752e4719d2078bd3152d571",
            "targeted": false,
            "ignored": false
        }, {
            "id": "5752e47152b4b0da50b998d4",            
            "contact_id": "5752e1c142f75a3c736285cd",
            "campaign_id": "5752e4719d2078bd3152d571",
            "targeted": false,
            "ignored": false
        }, {
            "id": "5752e47145584de7a52b35bc",            
            "contact_id": "5752e1c163e482d497fe3435",
            "campaign_id": "5752e4719d2078bd3152d571",
            "targeted": false,
            "ignored": false
        }, {
            "id": "5752e4714a9e6d92ff7d8704",            
            "contact_id": "5752e1c1b7bb85ea62243ebf",
            "campaign_id": "5752e4719d2078bd3152d571",
            "targeted": false,
            "ignored": false
        }, {
            "id": "5752e4714a9e6d92ff7d8705",            
            "contact_id": "5752e1c1435752138482eaa8",
            "campaign_id": "5752e471e7d8240d444a069c",
            "targeted": false,
            "ignored": false
        }, {
            "id": "5752e4714a9e6d92ff7d8706",
            "contact_id": "5752e1c16c5302590eef85b5",
            "campaign_id": "5752e471e7d8240d444a069c",
            "targeted": false,
            "ignored": false
        }, {
            "id": "5752e4714a9e6d92ff7d8707",            
            "contact_id": "5752e1c1c4f04142e69485bc",
            "campaign_id": "5752e471e7d8240d444a069c",
            "targeted": false,
            "ignored": false
        }, {
            "id": "5752e4714a9e6d92ff7d8708",            
            "contact_id": "5752e1c1f93c865ee81ec102",
            "campaign_id": "5752e471e7d8240d444a069c",
            "targeted": false,
            "ignored": false
        }];
    }]);
