# elemFocuser
directive to focus some element and hide other in same parent

Put focus-able as parent attribute
and focus-toggle="focus-item-selector" to button element

example

```
<div id='parent' focus-able>
  <div id='head-item'>
    <h1>Item 1</h1>
    <div class='btn btn-primary' focus-toggle='#head-item'>focus me</div>
  </div>
  <div id='bottom-item'>
    <h1>Item 2</h1>
    <div class='btn btn-primary' focus-toggle='#bottom-item'>focus me</div>
  </div>
</div>
```
