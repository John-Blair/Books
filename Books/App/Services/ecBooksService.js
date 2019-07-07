(function () {

    var app = angular.module('ecBooksModule');

    app.factory('ecBooksService', function ($resource) {
        return $resource('/api/booksapi/:id',{id:"@Id"} ,{ 
        update: 
            {
                method: 'PUT'
            }
        })
    });



})();