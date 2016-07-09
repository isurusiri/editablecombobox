# AngularJS editable combobox.

[![GitHub tag](https://img.shields.io/badge/tag-V1.0.1-brightgreen.svg)](https://github.com/isurusiri/editablecombobox/releases/tag/V1.0.1)
[![GitHub release](https://img.shields.io/badge/release-V1.0.1-blue.svg)](https://github.com/isurusiri/editablecombobox/releases)
[![apm](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/isurusiri/editablecombobox/blob/master/LICENSE)
[![PyPI](https://img.shields.io/pypi/status/Django.svg?maxAge=2592000)](https://github.com/isurusiri/editablecombobox)

An AngularJS editable combobox that has following features.

  - A combobox that can edit its' items on the fly.
  - Toggle edit permission 

Directive has been tested in AngularJS 1.4 and Supports Chrome, Firefox, IE 10 and above.

Usage:

Load the directive as follows:
```html
<script src="[patha_to]/index.js"></script>
```
Inject the module as a dependency to app:

```js
var myapp = angular.module('awesomeApp', [ ..., editableCombobox, ... ]);
```

An Awesome controller would be looks like:

```js
myapp.controller('AwesomeController', ['$scope', function ($scope) {
    $scope.selectOptioins = [ {id:0, name:"Red"}, {id:1, name:'Green'}, {id:2, name:'Orange'}];
    $scope.selectedOption = 0;
    $scope.initIndex = 0;
    $scope.editPermissinonsForUser = true;
    $scope.setSelectedIdInParent = function(selectedOption) {
        // do some awesome work here!
    };
}])
```

HTML should be like:

```html
<editable-combobox select-options="selectedOptions" selected-option="selectedOption" init-index="initIndex" set-selected-id-in-parent="setSelectedIdInParent" edit-permission-for-user="editPermissinonsForUser"></editable-combobox>
```

Given below are the properties that needs to bind with scope.

| Property     | Data Type | Description   |
| :------- | :----: | :--- |
| select-options | Array |  An array of combobox item objects.    |
| selected-option    | Object   |  An object that represents combobox item. eg: {id:0, name:"Red" }   |
| init-index     | Integer    |  Item to be selected when initializing.  |
| set-selected-id-in-parent    | Function   |  Callback functiona to do any updates when item has been changed.   |
| edit-permission-for-user    | Boolean    |  Editable/Non-Editable mode.  |

### Current Version
1.0.1
