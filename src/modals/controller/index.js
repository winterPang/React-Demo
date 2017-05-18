  function ctrlCb($scope) {
  	
      $scope.baseOption = {
          mId: 'aaa',                   // 模态框唯一的标示
          title: "提示" ,                    // 弹出框标题自定义，默认标题为“提示”
          autoClose: true,                     // 点击确定按钮是否关闭弹窗，默认关闭
          showCancel: true ,                  // 是否显示取消按钮，默认显示
          modalSize: 'normal',                              // 可选值 normal,sm,lg  分别对应正常，小型，大型
          showHeader: true,               // 显示头部
          showFooter: true,             // 显示尾部和按钮
          showClose: true,                // 显示右上角关闭按钮
          okText: '确定',                 // 确定按钮文本
          cancelText: '取消',                      //取消按钮文本
          okHandler: function(modal, $ele) {
              //点击确定按钮事件，默认什么都不做
              //   modal支持hide方法，使模态框隐藏
          },
          cancelHandler: function(modal, $ele) {
              //点击取消按钮事件，默认什么都不做，并且关闭取消按钮
          },
          beforeRender: function($ele) {
              //渲染弹窗之前执行的操作,$ele为传入的html片段
              return $ele;
          }
      }

      $scope.show = function(){
      	$scope.$broadcast('show#aaa');
      }
  }

  export default ['$scope', ctrlCb];
