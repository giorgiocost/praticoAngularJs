app.controller("imgCtrleao", function ($scope, $http) {
/*
    $http.get("v1/fotos/").then(function(resp) {
        $scope.fotos = resp.data;
    }).catch(function(error){ //tratamento de erro
        console.log(error);
    });
*/
    $http.get("v1/fotos")
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(erro){
        console.log(erro);
    });

});