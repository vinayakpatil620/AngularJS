var app=angular.module("myapp",[]);
app.controller("cntrl", function($scope,$http){
    $http.get("http://127.0.0.1:5500/package.json")
    .then(function(response){
        console.log(response.data.records);

        $scope.persons=response.data.records;
    })
})