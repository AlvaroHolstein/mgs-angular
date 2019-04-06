app.directive('jobAplication', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: './directives/jobaplication.directive.html',

        link: function (scope, element, attrs) {
            scope.cards = [
                {
                    imgSrc: 'http://www.mgserp.pt/images/pic10.jpg',
                    listItems: ['Graduation in Computer Science',
                        'Strong experience with Javascript, HTML and CSS',
                        'Frontend kills and rich experience with JS and JS frameworks/libs (design skills would be awesome)',
                        'And most of all we need passion!'],
                    title: 'What we need from you?' //Fazer filtro para upper case 
                },
                {
                    imgSrc: 'http://www.mgserp.pt/images/pic11.jpg',
                    listItems: ['Great work environment',
                        'Build a career in an international company',
                        'Training and working with a hard-working, dedicated and motivated team',
                        'Our support enhancing your individual skills.'],
                    title: 'What can we offer you?'
                }
            ]

            scope.toogleForm = function () {

                console.log('ata')
                $('#jobForm').slideToggle({
                    duration: 'slow',
                    easing: 'linear'
                });
            }
        }
    }
})