app.controller('controller1', ['$scope', function ($scope) {
    $scope.title = "Memórias Globais Software"


    $(document).ready(function () {
        console.log('preparado')
        $('#btn').click(event => {
            console.log('ola')
            $('div.col-md-12 h1').slideToggle()
        })
    })
}])