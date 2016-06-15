var editableCombobox = angular.module('editableCombobox', []);

editableCombobox.directive('editableCombobox', [ function (contextPanelFactory) {
        return {
            restrict: 'E',
            templateUrl: 'editable-drop-down-template.html',
            scope: {
                selectOptions: "=selectOptions",
                selectedOption: "=selectedOption",
                initIndex: "=initIndex",
                setSelectedIdInParent: "&setSelectedIdInParent",
                editPermissionForUser: "=editPermissionForUser"
            },
            link: function(scope, elems, attrs) {
                scope.isSelectedOptionEmpty = false;
                scope.selectionChange = function (newSelection) {
                    scope.initIndex = scope.selectOptions.indexOf(newSelection);
                    scope.selectedOption = newSelection.id;
                    scope.setSelectedIdInParent({id:scope.selectedOption});
                };
                scope.changeSelectedOptionInput = function() {
                    if (scope.selectOptions[scope.initIndex].name === "" || scope.selectOptions[scope.initIndex].name === " " ) {
                        scope.isSelectedOptionEmpty = true;
                    } else {
                        scope.isSelectedOptionEmpty = false;;
                    }
                };
            }
        }
    }
]);
