'use strict';

/**
 * @ngdoc service
 * @name catsGoApp.mainService
 * @description
 * # mainService
 * Factory in the catsGoApp.
 */
angular.module('catsGoApp')
  .factory('mainService', ['$http' ,'$q' ,function ($http,$q) {
    // Service logic
    // ...


    var meaningOfLife = 42;
  
//Genera numeros al azar unicos entre el 1 y el 'max' devuelve un array maximo de 'lenght'
       function randomUniqueNumbers(length,max,isZero){
        var numbers = [];
        var zero=1;

          if (max<length || (!length || !max)){
            return null;
          }
          if (isZero===0){
           zero=0;
          }
        for (var i=0;i<length;++i) {
          numbers.push(Math.floor((Math.random() * max) +zero));
        }
          
          numbers=_.uniq(numbers);

          while(numbers.length!==length){
          numbers.push(Math.floor((Math.random() * max) +zero));
          numbers=_.uniq(numbers);
          }

          return numbers;
       }


    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      randomArray: function (length,max,isZero){
        var arr=randomUniqueNumbers(length,max,isZero);
        return arr;
      
      },
       get: function(url,config,callback){ //URL,Callbacks        <<Testing http response 200      rnd='+new Date().getTime()'>>
        if (typeof callback !== 'function' && config){
          callback=config;
          config=null;
        }
         if (typeof callback === 'function' && url) {

           $http.get(url,config).success(function(data) {
           // prepare data here
           callback(data);
          }).
          error(function(data) {
          console.log(data);
          });

          }
          else {
            console.log('mainService.get function error in pararms');
          }

        },
        getPromises: function(){
                                       
            var temp = {};
            var defer = $q.defer();
            $http.get('images/test.json').success(function(data){
                    temp =data;
                    defer.resolve(data.frases);
            });

            return defer.promise;

                             },        

      test: function(){
        return randomUniqueNumbers();
      }

    };
  }]);
