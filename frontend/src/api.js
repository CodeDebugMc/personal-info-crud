import axios from "axios";

const API_URL = "http://localhost:5000/api/persons";

export const getPersons = () => axios.get(API_URL);
export const addPerson = (data) => axios.post(API_URL, data);
export const updatePerson = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deletePerson = (id) => axios.delete(`${API_URL}/${id}`);
