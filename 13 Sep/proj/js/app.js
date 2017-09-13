const app=angular.module('myapp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:'views/login.html'
    });
    $routeProvider.when("/contactus",{
        templateUrl:'views/contactus.html'
    });
});