import 'css!../less/index';

function ctrlCB($scope){
    $scope.opts = {
      data:[
                {
                   "icon"  : "glyphicon glyphicon-education",
                   "name"  : "菜单一",
                   "sref"  :  "a",
                   "child" : [
                        {
                           "icon"  : "glyphicon glyphicon-education",
                           "name"  : "菜单二",
                            "sref"  :  "b",
                           "child" : [
                                {
                                    "icon"  : "glyphicon glyphicon-education",
                                     "sref"  :  "f",
                                    "name"  : "菜单三" 
                                }
                           ]  
                        }
                   ]  
                },
                {
                   "icon"  : "glyphicon glyphicon-education",
                   "name"  : "菜单一",
                    "sref"  :  "c",
                   "child" : [
                        {
                           "icon"  : "glyphicon glyphicon-education",
                           "name"  : "菜单二",
                            "sref"  :  "d",
                           "child" : [
                                {
                                    "icon"  : "glyphicon glyphicon-education",
                                     "sref"  :  "e",
                                    "name"  : "菜单三" 
                                }
                           ]  
                        }
                   ]  
                }
            ]
    };

    $scope.horizontalOpt ={
      type:'horizontal',
      data:[
         {
            "icon"  : "glyphicon glyphicon-education",
            "name"  : "菜单一",
            "sref"  :  "",
            "child" : [
                {
                  "icon"  : "glyphicon glyphicon-education",
                  "name"  : "菜单二",
                  "sref"  :  "",
                  "child" : [
                    {
                      "icon"  : "glyphicon glyphicon-education",
                      "name"  : "菜单三" ,
                      "sref"  :  ""
                    },
                    {
                      "icon"  : "glyphicon glyphicon-education",
                      "name"  : "菜单三" ,
                      "sref"  :  ""
                    }
                  ]
                },
                {
                  "icon"  : "glyphicon glyphicon-education",
                  "sref"  :  "",
                  "name"  : "菜单二1"
                }
              ]  
          },
          {
            "icon"  : "glyphicon glyphicon-education",
            "name"  : "菜单一",
            "sref"  :  "",
            "child" : [
              {
                "icon"  : "glyphicon glyphicon-education",
                "name"  : "菜单二",
                "sref"  :  "",
                "child" : [
                  {
                    "icon"  : "glyphicon glyphicon-education",
                    "sref"  :  "",
                    "name"  : "菜单三" 
                  }
                ]  
              }
            ]  
          }
      ]
    }
}

export default ['$scope',ctrlCB]
    
