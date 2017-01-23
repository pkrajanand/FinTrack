angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Account Balance Overview(Yearly)', content:'overview.htm' },
    { title:'Savings/Debt Tracking(Monthly)', content:'monthly.htm'},
    { title:'Savings/Debt Tracking(Daily)', content:'daily.htm'},
    { title:'Savings/Debt Analysis(Yearly)', content:'yearly.htm'}
  ];

  $scope.model = {
    name: 'Tabs'
  };
});