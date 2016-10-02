angular.module('angularPractiseApp').controller('movieCtrl',function($scope,$http){
//TODO: Add movie to external json directly
//TODO: Angular form validation
  $http.get('/movies.json').success(function(data){
    $scope.movies=data;
  }).error(function(data,status){
   console.error(data);
   if(status==404){
     alert("Page Not found");
   }
   else{
     alert("Unknown error");
    }
  });

  //by default the form is open
  $scope.closed=false;
  //creating an object of movie so that it can be binded with the template with their default values
  $scope.movie={
    title:'',
     //default value of image
    poster:'https://www.digitalprolab.com/products/video/images/Movie-Reel-hero.jpg',
    description:'',
    runtime:'',
    actors:''
  }

  $scope.checkTitle=function(){
    if(!$scope.movie.title.length>0){
     alert("Title is required");
    }
  };
  $scope.checkDescription=function(){
    if(!$scope.movie.description.length>0){
      alert('Description is required');
    }
  };

  //If any fields empty then add button must be hidden, so return true or false accordingly
  $scope.validateForm=function(){
    if($scope.movie.title=='')
     return false;
    if($scope.movie.description=='')
     return false;
    if($scope.movie.runtime=='')
     return false;
    if($scope.movie.actors=='')
     return false;
    return true;
  };
  //Add movie function add the movie object to the movies
  $scope.addMovie=function(){
    //If angular.copy is absent then the new movie references changes, so to break the link we copy the object each tome
    $scope.movies.push(angular.copy($scope.movie));
  };

});
