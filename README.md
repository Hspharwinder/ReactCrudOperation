# ReactCrudOperation
ReactCrudOperation dynamic static Array of object 

Creating dynamic object with dynamic and static key value
file --> AddUser.jsx
function --> Validation
code
---
  let id = "dynamic_value";
  let valid = {};
  let v_id = "v_" + id;
  let key = "age";
  let value = "25";
  valid[v_id] = { touched : true}; // set static key and value
  valid[v_id] = { [key] : value }; // set dynamic key and value
output
-----
valid:{
  v_dynamic_value:{ 
    touched : true, 
    age:25 
 }
}
