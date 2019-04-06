app.controller('controller1', ['$scope', function ($scope) {
    $scope.title = "Memórias Globais Software"

//     $scope.css = {
//         backgroundA
//         background-attachment: 'fixed !important'
//             background-size: 'cover !important',
//                 height: '200px',
//                     padding: '20% 1%',
//                         background: 'url("assets/mosteiro_santa_clara.jpg") 50% 0 repeat-y fixed';
// }

    $(document).ready(function () {
    console.log('preparado')
    $('#btn').click(event => {
        $('div.col-md-12 h1').slideToggle()
    })
})
}])