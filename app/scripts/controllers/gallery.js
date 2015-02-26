'use strict';

/**
 * @ngdoc function
 * @name catsGoApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the catsGoApp
 */
angular.module('catsGoApp')
  .controller('GalleryCtrl', ['$scope' ,'mainService', function ($scope,mainService) {
   


    $scope.changeQuotes= function() {
            mainService.get('database/quotes.json',function(data){ 

            var a=mainService.randomArray(1, data.frases.length ,0);
            

            $scope.quotes=[{
            quote:data.frases[a].quote
            }
            ];

            });
};

// Manejo de owl carousel
$scope.owlCarousel= $('#owl-carousel-gallery').ready(function(){
          $(window).off();
          setTimeout(function() {
          $('.footer').show(500);
          }, 600);
    //Contructor de owl
      function customDataSuccess(data){
        var content = '';
        for(var i in data.items){
           
           var img = data.items[i].img;
           var alt = data.items[i].alt;
           content +='<div>';
           content += '<img class="lazyOwl" data-src="'+img+'" alt="'+alt+'" >'  ;
           content += '</div>';
        }
        $('#owl-carousel-gallery').html(content);
      }


    $('#owl-carousel-gallery').owlCarousel({
        //Opciones owl
        autoPlay:10000,
        stopOnHover:true,
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        scrollPerPage:true,
        paginationSpeed : 400,
        singleItem:true,
        lazyLoad : true,
        jsonPath : 'database/images.json',
        jsonSuccess : customDataSuccess,
        afterInit: function() {
          $scope.changeQuotes();
        },
        startDragging: function(){
        
        },
        afterMove: function (){  //ejecuta una funcion al cargar una image se extiende con angular
              var a=mainService.randomArray(1,8,0);
                 var color=['#464646','#008194','#E8C8A0','#D9AD43',
                            '#DB4835','#FFB403','#1A6FEF', '#039F5C' ]; 
                  $( "#galleryView" ).animate({
                  backgroundColor: color[a]
                  }, 1000 );
                 $scope.changeQuotes();
        
        }
      });

});

  }]);
