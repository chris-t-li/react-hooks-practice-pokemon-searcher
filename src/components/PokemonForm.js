import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPokemon }) {
  const [formData, setFormData] = useState({
    "name": "",
    "hp": 0,
    "frontUrl": "",
    "backUrl": "",
  })

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          console.log("submitting form...");
          e.preventDefault();
          addNewPokemon(formData);
          // setFormData({
          //   "name": "",
          //   "hp": 0,
          //   "frontUrl": "",
          //   "backUrl": "",
          // })
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleOnChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleOnChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleOnChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
