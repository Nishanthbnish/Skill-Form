var app = angular.module('skillSetApp', []);

app.controller('skillSetController', function($scope) {
  $scope.skills = [];
  
  $scope.addSkill = function() {
    if ($scope.newSkill) {
      $scope.skills.push($scope.newSkill);
      $scope.newSkill = '';
    }
  };
   $scope.removeSkill = function(index) {
          $scope.skills.splice(index, 1);
        };
  
    
});
