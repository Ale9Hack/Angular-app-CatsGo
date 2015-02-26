'use strict';

/**
 * @ngdoc function
 * @name catsGoApp.controller:MainCtrl
 * @descriptionhttp://localhost:9000/#/
 * # MainCtrl
 * Controller of the catsGoApp
 */
angular.module('catsGoApp')
  .controller('MainCtrl', ['$scope','mainService', function ($scope,mainService) {
   var baseURL='http://lorempixel.com/1920/1080/';

/*testing --------> mainService.get(URL,callback,config (params)) mainService.getPromises() */ 
mainService.get('database/quotes.json',function(data){ 
    var a=mainService.randomArray(3,10);
    var b=mainService.randomArray(3,data.frases.length,0);
    $scope.thumbnails = [
    {
      title:'',
      image:baseURL+'cats/'+a[0],
      quote:data.frases[b[0]].quote,
      author:data.frases[b[0]].author
    },
       {
      title:'',
      image:baseURL+'cats/'+a[1],
      quote:data.frases[b[1]].quote,
      author:data.frases[b[1]].author
    },
       {
      title:'',
      image:baseURL+'cats/'+a[2],
      quote:data.frases[b[2]].quote,
      author:data.frases[b[2]].author
    }

    ];
    a=null;
    b=null;
  $scope.onReset = function(){
    var a=mainService.randomArray(3,10);
    var b=mainService.randomArray(3,3,0);

    $scope.thumbnails = [
    {
      title:'',
      image:baseURL+'cats/'+a[0],
      quote:data.frases[b[0]].quote,
      author:data.frases[b[0]].author
    },
       {
      title:'',
      image:baseURL+'cats/'+a[1],
      quote:data.frases[b[1]].quote,
      author:data.frases[b[1]].author
    },
       {
      title:'',
      image:baseURL+'cats/'+a[2],
      quote:data.frases[b[2]].quote,
      author:data.frases[b[2]].author
    }

    ];

};
});

    var randomImage=mainService.randomArray(3,10);
   $scope.slides= [
   {
   	title:'',
    text:'',
   	image:baseURL+'cats/'+randomImage[0],
   	active:'item active'
   },

      {
   	title:'',
    text:'',
   	image:baseURL+'cats/'+randomImage[1],
   	active:'item'
   },

      {
   	title:'',
   	image:baseURL+'cats/'+randomImage[2],
    text:'',
   	active:'item'
   }


   ];

$scope.effectsJquey=$('#mainView').ready(function (){

//console.log($(window).height());  //
//console.log($(document).height()); // FOR TESTING
//console.log($(window).scrollTop()) //

// Espera a que termine de cargar la pagina
$(window).on('load',function() {
  if($(window).height()+$(window).scrollTop()  != $(document).height()) {
$( '.footer' ).hide(500);
console.log('load if hide');
console.log($(window).height(),$(document).height());
   }

else  {
  $( '.footer' ).show(500);
  console.log('bind else show');
}

});


// Detecta un cambio en la posision de la ventana  scroll
 $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height()  == $(document).height() ||   $(document).height()-30<$(window).scrollTop() + $(window).height()) {
       $( '.footer' ).show(500);  
   }
   else if($(window).height() != $(document).height()) {
    $( '.footer' ).hide(500);
   }

});


// Detecta un cambio en la URL 'hashchange'

$(window).bind('hashchange',{} ,function() {
// BUG JQUERY and angular. No setea las variables correctamente. //callback use
console.log($(document).height())
console.log(event.height);
console.log($(location).attr('href'));
//Detecta cambios en el DOM window or document.. mediante ciclo.
$(window).bind('DOMSubtreeModified',function() {
if($(window).height()  == $(document).height() && $('.footer').css('display') == 'none') {
  $( '.footer' ).show(500);
  console.log('bind if show');
  console.log($(window).scrollTop(),$(window).height(), $(document).height())
}


else if($('.footer').css('display') == 'block' && $(window).height()+ $(window).scrollTop()  != $(document).height()) {
     console.log($(window).height() , $(window).scrollTop(), $(document).height());
$( '.footer' ).hide(500);


console.log('bind else hide');
   }

   else {
    console.log('nada')
   }


});

console.log('stop(clearQueue, gotoEnd)');




});

// Desactivar eventos in angular scope controller

       
          $('#secondaryBotton').click(function (){
                if ($(window).width() <= 992) {
              setTimeout(function(){
                         $('html, body').animate({
                        scrollTop: $('#mainBotton').offset().top //Funcion para hacer focus el scroll en un elemento.
                    }, 2000 );   // Duracion del efecto                                      
                                   }, 1); //<< Tiempo en ms..... 
             }
               });

               $('.carousel').carousel({
                 interval: 5000
                       });


$('#secondaryBotton').click(function() {
    $(window).off('DOMSubtreeModified');


});



$('#secondaryBotton').click(function() {
    $('#owl-carousel-gallery').off();


});




        });



  }]);
