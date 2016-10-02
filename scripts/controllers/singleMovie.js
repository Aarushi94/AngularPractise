angular.module("angularPractiseApp").controller('singleMovieCtrl',function($scope,$routeParams,$http){
  console.log($routeParams.id),
  console.log($routeParams.slug);
  var id=parseInt($routeParams.id);
  var movies=[
    {
      "id":23,
      "title":"M.S. Dhoni: The Untold Story",
      "poster":"http://ia.media-imdb.com/images/M/MV5BOTY5ODQxMTY3M15BMl5BanBnXkFtZTgwOTA3NTA4OTE@._V1_SX300.jpg",
      "description":"The untold story of Dhoni's journey from ticket collector to trophy collector - the world-cup-winning captain of the Indian Cricket Team.",
      "runtime":"3 hrs 15mins",
      "actors":"Sushant Singh Rajput,Fawad Khan, Anupam Kher, Disha Patani, Kiara Advani"
    },
    {
      "id":12,
      "title":"Banjo",
      "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzk4NTI1ZDYtYmU3MC00ZTk2LWI3OGQtZGE5OWY1ZmM2ZjE0XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
      "description":"Taraat, a local banjo player, seeks fame, success, and money. In his pursuit, he crosses path with Christina, who helps him accomplish his goals.",
      "runtime":"2 hrs 17mins",
      "actors":"Riteish Deshmukh, Nargis Fakhri, Sheeba George, Shruthi Mathur"
    },
    {
      "id":19,
      "title":"Pink",
      "poster":"https://www.digitalprolab.com/products/video/images/Movie-Reel-hero.jpg",
      "description":"Deepak is a lawyer suffering from bipolar disorder who experiences frequent mood swings. One night, Rajveer and his friends get drunk and try to molest Miss Arora and her two roommates leading to an accident. The film revolves around how Deepak fights the girls' case against these influential boys.",
      "runtime":"2 hrs 16mins",
      "actors":"Amitabh Bachchan, Tapsee Pannu, Piyush Mishra, Kirti Kulhari"
    }
  ];

  /* $http.get('/movies.json').success(function(data){
    console.log(data);
    movies=data;
  }).error(function(data,status){
   console.error(data);
   if(status==404){
     alert("Page Not found");
   }
   else{
     alert("Unknown error");
    }
  });
*/
  for(var index in movies){
    console.log("In for loop");
    var movie=movies[index];
    console.log(movie);
    if(movie.id==id){
      $scope.movie=movie;
    }
  }
});
