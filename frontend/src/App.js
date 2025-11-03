import React, { useState, useEffect } from "react";
import { Container, Typography, Paper } from "@mui/material";
import { getPersons, addPerson, updatePerson, deletePerson } from "./api";
import PersonForm from "./components/PersonForm";
import PersonTable from "./components/PersonTable";

function App() {
  const [persons, setPersons] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadPersons = async () => {
    const res = await getPersons();
    setPersons(res.data);
  };

  useEffect(() => {
    loadPersons();
  }, []);

  const handleSubmit = async (data) => {
    selected ? await updatePerson(selected.id, data) : await addPerson(data);
    setSelected(null);
    loadPersons();
  };

  const handleDelete = async (id) => {
    await deletePerson(id);
    loadPersons();
  };

  return (
    <Container>
      <Typography variant="h4" mt={3} align="center">
        Personal INformation CRUD
      </Typography>
      <Paper elevation={3}>
        <PersonForm
          selected={selected}
          onSubmit={handleSubmit}
          onCancel={() => setSelected(null)}
        />
      </Paper>
      <Paper elevation={3} sx={{ mt: 3 }}>
        <PersonTable
          persons={persons}
          onEdit={setSelected}
          onDelete={handleDelete}
        />
      </Paper>
    </Container>
  );
}

export default App;
