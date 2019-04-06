app.directive('footerDire', () => {
    return {
        restrict: 'E',
        scope: {
            /**
             * Devia tar a usar aqui o info: '='
             */
        },
        templateUrl: './directives/footer/footer.directive.html',
        link: (scope, eleme0nt, attrs) => {
            scope.contacts = [
                {
                    name: 'Memórias Globais Software',
                    address: ['Avenida Brasil, Nº.282, Apt 301',
                        '4480-659 Vila do Conde',
                        'Portugal'],
                    tele: '(+351) 252 063 124',
                    mail: 'admin@mgserp.com'
                },
                {
                    name: 'Memórias Globais Software',
                    address: ['Ludwing-Blum-Str.13',
                        '70327 Stuttgart',
                        'Deutschland'],
                    tele: '(+49) 7021 92804 60',
                    mail: 'info@mgserp.com'
                }
            ]
        }
    }
})