import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

const PersonTable = ({ persons, onEdit, onDelete }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Date of Birth</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {persons?.map((p) => (
        <TableRow key={p.id}>
          <TableCell>{p.first_name}</TableCell>
          <TableCell>{p.last_name}</TableCell>
          <TableCell>{p.email}</TableCell>
          <TableCell>
            {new Date(p.date_of_birth).toLocaleDateString()}
          </TableCell>
          <TableCell>
            <Button variant="outlined" onClick={() => onEdit(p)}>
              Edit
            </Button>
            <Button
              color="error"
              variant="outlined"
              onClick={() => onDelete(p.id)}
              sx={{ ml: 1 }}
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default PersonTable;
