
# ReactCrudOperation
ReactCrudOperation dynamic static Array of object 

code
---
  let id = "dynamic_value";<br />
  let valid = {};<br />
  let v_id = "v_" + id;<br />
  let key = "age";
  let value = "25";<br />
  valid[v_id] = { touched : true}; // set static key and value<br />
  valid[v_id] = { [key] : value }; // set dynamic key and value<br />

output
-----
valid:{<br />
		v_dynamic_value:{ <br />
			touched : true, <br />
			age:25 <br />
	 }<br />
}<br />
