app.directive('compBranches', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: './directives/companyBranches/compBranches.directive.html',
        link: (scope, element, attrs) => {
            scope.comps = [
                {
                    title: 'Memórias Globais Software',
                    text: `MGS is in charge of the design and development of mobile app strategies for a metalworking 
                    industry solution, in a Portuguese-German alliance with SMS Business Software Solution.`,
                    link: 'https://www.sbo.app/en/home',
                    img: 'http://www.mgserp.pt/images/pic01.jpg'
                },
                {
                    title: 'SMS Business Software Solution',
                    text: `SMS Business Software Solution specializes in the special 
                    challenges for the metalworking, mechanical engineering, steel and metal trade and 
                    today offers a convincing solution based on the superior IT technology SAP Business One.`,
                    link: 'http://www.smserp.de/',
                    img: 'http://www.mgserp.pt/images/pic02.jpg'
                },
                {
                    title: 'SAP Business one',
                    text: `The SAP Business One application offers an affordable way to manage your entire business
                    – from sales and customer relationships to financials and operations. 
                    Designed specifically for small businesses and sold exclusively through SAP partners,
                    it helps you streamline processes, act on timely information and drive profitable growth.`,
                    link: 'http://www.sap.com/product/enterprise-management/business-one.html',
                    img: 'http://www.mgserp.pt/images/pic03.jpg'
                }
            ]
        }
    }
})