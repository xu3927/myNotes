# angular-ui-bootstrap学习

### 起始依赖

>1. angular.js
>2. angular-animate 如果用到动画需要引入该包
>3. angular-touch 用到滑动事件可以引入该包
>4. bootstrap.css 


### Modal (ui.bootstrap.modal) 模态框

$uibModal 服务用来创建模态框, create a template and controller, and reference them when using $uibModal.

$uibModal 只有 open(options) 一个方法

```
<script>
angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };

  $ctrl.openMultipleModals = function () {
    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-bottom',
      ariaDescribedBy: 'modal-body-bottom',
      templateUrl: 'stackedModal.html',
      size: 'sm',
      controller: function($scope) {
        $scope.name = 'bottom';  
      }
    });

    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-top',
      ariaDescribedBy: 'modal-body-top',
      templateUrl: 'stackedModal.html',
      size: 'sm',
      controller: function($scope) {
        $scope.name = 'top';  
      }
    });
  };

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('ui.bootstrap.demo').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});
</script>
```
### 2. uib-tab

![uib-tab.png](images/chatu/uib-tab.png)

```
<!-- 
uib-tabset 指令的可选属性
active: Number 当前激活的标签序号, 通过控制active的值可以更改当前激活的标签 
justified: Boolean, tab栏是否两端对齐, 撑满宽度. 
type: tabs/pills, tab样式
vertical: Boolean, 是否纵向显示tabs;
-->
<uib-tabset 
  active="1" 
  justified="false">

  <!-- 
  index: Number, 标签的序号, 可以通过active来决定激活哪个标签
  heading: String, tab标签显示的名称, 在tab中插入的内容会在点击该标签后显示
  deselect: Function, 当标签不被选择时触发, 如果第一次选中标签, 第二次再次点击该标签也会触发该方法.
  disable: Boolean, 标签是否能被点击.
  select: 标签被选中粗发, 重复点击能够重复触发该属性
   -->
  <uib-tab 
  index="0" 
  heading="11栏"
  deselect="tabDeselect()"
  disable="false"
  select="tabSelect()"
  >1111{{aa}}</uib-tab>
  <uib-tab index="$index + 1" heading="22栏22栏22栏22栏22栏22栏" classes="sm-btn">222</uib-tab>
  <uib-tab index="$index + 2" heading="33栏" class="btn-sm">33331</uib-tab>
  <uib-tab index="5" heading="144栏">4444</uib-tab>
</uib-tabset>

<script type="text/javascript">
// 控制器中
  $scope.tabDeselect = function () {
      console.log("deselect");
    }
    $scope.tabSelect = function () {
      console.log("tabSelect");
    }
</script>

```