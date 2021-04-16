import React, { useEffect } from "react";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { fade, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import { useForm } from "../hooks/useForm";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Form = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: column;
  > div {
    margin: 5px;
  }
`;

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const initialForm = {
  name: "",
  planet: "",
  date: "",
  description: "",
  durationInDays: "",
};

const FormCreat = () => {
  const history = useHistory();
  const [form, onChange, resetForm] = useForm(initialForm);

  const handleClick = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  const createTrip = () => {
    const token = window.localStorage.getItem("token");

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kelvia-santos-cruz/trips",
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Success! Trip has been created");
        history.push("/admin/trips/list");
      })
      .catch((error) => {
        alert('You have to fill in all the fields correctly');
      });
  };

  return (
    <Form onSubmit={handleClick}>
      <FormControl  required>
        <InputLabel shrink htmlFor="bootstrap-input">
          Name
        </InputLabel>
        <BootstrapInput 
          placeholder='Trip name'
          name="name"
          onChange={onChange}
          value={form.name}
          type="text"
          inputProps={{ pattern: "[a-z]{5}"}}
        />
      </FormControl>

      <FormControl required variant="outlined">
        <InputLabel>Planet</InputLabel>
        <Select value={form.planet} onChange={onChange} name="planet">
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={"Mercury"}>Mercury</MenuItem>
          <MenuItem value={"Venus"}>Venus</MenuItem>
          <MenuItem value={"Earth"}>Earth</MenuItem>
          <MenuItem value={"Mars"}>Mars</MenuItem>
          <MenuItem value={"Jupiter"}>Jupiter</MenuItem>
          <MenuItem value={"Saturn"}>Saturn</MenuItem>
          <MenuItem value={"Uranus"}>Uranus</MenuItem>
          <MenuItem value={"Neptune"}>Neptune</MenuItem>
        </Select>
      </FormControl>

      <FormControl required  >
        <InputLabel shrink htmlFor="bootstrap-input">
          Date
        </InputLabel>
        <BootstrapInput
          name="date"
          onChange={onChange}
          value={form.date}
          type="date"
        />
      </FormControl>

      <FormControl required >
        <InputLabel shrink htmlFor="bootstrap-input">
          Description
        </InputLabel>
        <TextField
          name="description"
          onChange={onChange}
          value={form.description}
          id="outlined-multiline-static"
          multiline
          rows={2}
          defaultValue={""}
          variant="outlined"
          inputProps={{ pattern: "(/[a-z]){30}/)"}}
        />
      </FormControl>
      <FormControl required>
        <InputLabel shrink htmlFor="bootstrap-input">
          Duration(days)
        </InputLabel>
        <BootstrapInput
          name="durationInDays"
          onChange={onChange}
          value={form.durationInDays}
          type="number"
          inputProps={{ pattern: "(/[50-300]/)"}}
        />
      </FormControl>
      <Button
        onClick={createTrip}
        variant="contained"
        color="primary"
        style={{ fontSize: 15 }}
      >
        Send
      </Button>
    </Form>
  );
};

export default FormCreat;
