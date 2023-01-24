import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function AddEditForm(props) {
  const [form, setValues] = useState({
   
    name: "",
    position: ""
  });

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitFormAdd = (e) => {
    console.log(props.item);
    e.preventDefault();
    // fetch('http://localhost:3000/crud', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     first: form.first,
    //     last: form.last,
    //     email: form.email,
    //     phone: form.phone,
    //     location: form.location,
    //     hobby: form.hobby
    //   })
    // })
    //   .then(response => response.json())
    //   .then(item => {
    //     if(Array.isArray(item)) {
    //       props.addItemToState(item[0])
    //       props.toggle()
    //     } else {
    //       console.log('failure')
    //     }
    //   })
    //   .catch(err => console.log(err))
    props.addItemToState(form);
    props.toggle();
  };

  const submitFormEdit = (e) => {
    e.preventDefault();
    // fetch("http://localhost:3000/crud", {
    //   method: "put",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     id: form.id,
    //     first: form.first,
    //     last: form.last,
    //     email: form.email,
    //     phone: form.phone,
    //     location: form.location,
    //     hobby: form.hobby
    //   })
    // })
    //   .then((response) => response.json())
    //   .then((item) => {
    //     if (Array.isArray(item)) {
    //       // console.log(item[0])
    //       props.updateState(item[0]);
    //       props.toggle();
    //     } else {
    //       console.log("failure");
    //     }
    //   })
    //   .catch((err) => console.log(err));
    props.updateState(form);
    props.toggle();
  };

  useEffect(() => {
    if (props.item) {
      const {  name, position } = props.item;
      setValues({  name, position });
    }
  }, [props.item]);

  return (
    <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          onChange={onChange}
          value={form.name === null ? "" : form.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="position">Position</Label>
        <Input
          type="text"
          name="position"
          id="position"
          onChange={onChange}
          value={form.position === null ? "" : form.position}
        />
      </FormGroup>
     
      <Button>Submit</Button>
    </Form>
  );
}

export default AddEditForm;
