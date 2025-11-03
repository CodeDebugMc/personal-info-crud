import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import dayjs from "dayjs";

const PersonForm = ({ selected, onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
  });

  useEffect(() => {
    if (selected) {
      setForm(selected);
    } else {
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        date_of_birth: "",
      });
    }
  }, [selected]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(form);
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      date_of_birth: "",
    });
  };

  return (
    <Box display="flex" flexDirection={"column"} gap={2} p={2}>
      <TextField
        name="first_name"
        label="First Name"
        value={form.first_name}
        onChange={handleChange}
      />
      <TextField
        name="last_name"
        label="Last Name"
        value={form.last_name}
        onChange={handleChange}
      />
      <TextField
        name="email"
        label="Email"
        value={form.email}
        onChange={handleChange}
      />
      <TextField
        name="date_of_birth"
        label="Date of Birth"
        type="date"
        value={
          form.date_of_birth
            ? dayjs(form.date_of_birth).format("YYYY-MM-DD")
            : ""
        }
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <Box display="flex" gap={1}>
        <Button variant="contained" onClick={handleSubmit}>
          {selected ? "Update" : "Add"}
        </Button>
        {selected && (
          <Button variant="outlined" color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default PersonForm;
