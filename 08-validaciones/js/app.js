(function(){
    
    "use strict";
    
    angular.module('Bookmarks',[
        //dependences here
    ])
    
    //console.log('Bookmarks module!');
    
    .controller('MainController',function($scope){

        $scope.name = 'Carl'
        $scope.categories = ['HTML5','JavaScript','CSS','Games'];

    });
    
})();

