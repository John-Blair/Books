(function () {

    var app = angular.module('ecBooksModule');

    app.controller('ecListBooksController', function ($scope, ecBooksService) {
        $scope.bookList = ecBooksService.query();

        $scope.editMode = false;
        $scope.detailsMode = false;
        $scope.createMode = false;

        $scope.editBook = {};
        $scope.newBook = {};
        $scope.edit = function (book) {
            $scope.editMode = true;
            $scope.detailsMode = false;
            $scope.createMode = false;

            // Prevent main list being updated until saved to the db.
            $scope.editBook = angular.copy(book);
        };
        $scope.create = function () {
            $scope.editMode = false;
            $scope.detailsMode = false;
            $scope.createMode = true;

            $scope.newBook.Id = 0;
            $scope.newBook.Title = "";
            $scope.newBook.Published = new Date();
        };


        $scope.details = function (book) {
            $scope.editMode = false;
            $scope.createMode = false;
            $scope.detailsMode = true;

            $scope.editBook = angular.copy(book);
        };

        $scope.editCancel = function () {
            $scope.editMode = false;
            $scope.editBook = {};
        };

        $scope.detailsCancel = function () {
            $scope.detailsMode = false;
            $scope.editBook = {};
        };

        $scope.createCancel = function () {
            $scope.createMode = false;
            $scope.newBook = {};
        };

        $scope.editSave = function () {
            $scope.editMode = false;
            $scope.editBook.$update().then(function (response) { $scope.bookList = ecBooksService.query(); });
        };
        $scope.save = function () {
            $scope.createMode = false;
            ecBooksService.save($scope.newBook).$promise.then(function (response) { console.log("save response" + response);  $scope.bookList = ecBooksService.query(); });
        };


        $scope.delete = function (book) {
            book.$delete().then(function (response) { console.log("del response");  $scope.bookList = ecBooksService.query(); });
        };


        $scope.refresh = function () {
            $scope.bookList = ecBooksService.query();
        };
    });



})();

