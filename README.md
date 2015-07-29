# How to use
* Add ___tpl.uiSrefActiveIf___ as a dependency to your angular module  
    ```
    angular.module('yourModule', ['tpl.uiSrefActiveIf']);
    ```

* Specify a state object in your controller like the following
    ```
    vm.USER_STATE = {
      className: 'ui-active',
      stateName: 'app.user'
    };
    ```

* Add ___ui-sref-active-if___ as an attribute to an element to activate the directive
		```
    <E ui-sref-active-if="vm.YOUR_STATE"></E>
    ```

* Now every state containing the ___stateName___ will trigger the adding of ___className___ to your element

That's it. Have fun.
