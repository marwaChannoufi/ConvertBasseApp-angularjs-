var myApp =angular.module('myApp',[])

myApp.controller("cont1",["$scope","$filter",($scope,filter)=>{
    $scope.title="with Angular js"
    $scope.decimal=""
    $scope.binary=""
    $scope.octal=""
    $scope.hexa=""
    $scope.$watch("decimal",(newValue,oldValue)=>{
        if(newValue!=""){
            
        $scope.binary=parseInt(newValue,10).toString(2)
        $scope.octal=parseInt(newValue,10).toString(8)
        $scope.hexa=parseInt(newValue,10).toString(16).toUpperCase()
        }else{ 
    $scope.binary=""
    $scope.octal=""
    $scope.hexa=""
        }

    })
    $scope.$watch("binary",(newValue,oldValue)=>{
        if(newValue!=""){
         
        $scope.decimal=parseInt(newValue,2).toString(10)    
        }else{
            $scope.decimal=""
        }
    })
    $scope.$watch("octal",(newValue,oldValue)=>{ 
        if(newValue!=""){
            
        $scope.decimal=parseInt(newValue,8).toString(10) 
        }else{
            $scope.decimal=""
        }
    })
    $scope.$watch("hexa",(newValue,oldValue)=>{ 
        if(newValue!=""){
        $scope.decimal=parseInt(newValue,16).toString(10) 
    }else{
        $scope.decimal=""
    }
    })

}])