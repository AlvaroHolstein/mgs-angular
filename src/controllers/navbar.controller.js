app.controller('navbarCtrl', ['$scope', function ($scope) {
    $scope.cenas = [
        {
            name: 'Home',
            ref: '#home'
        },
        {
            name: 'About',
            ref: '#about'
        },
        {
            name: 'Jobs',
            ref: '#jobs'
        },
        {
            name: 'Contacts',
            ref: '#contacts'
        }
    ]
    console.log($scope.cenas)
}])