(function () {

    var app = angular.module('ecBooksModule');

    app.directive('ecListBooks', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/App/Views/ecListBooks.html',
            controller: 'ecListBooksController'
        }
    });

})();