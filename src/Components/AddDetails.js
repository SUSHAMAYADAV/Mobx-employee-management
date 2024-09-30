import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Stack, Typography } from "@mui/material";
import employeeStore from "../mobx/employeeStore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid rgb(248 245 245)",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const AddDetails = observer(({ open, handleCloseButton, editData }) => {
  const [user, setUser] = useState({
    employeeid: "",
    fullName: "",
    department: "",
    salary: "",
    description: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    if (editData) {
      setUser(editData);
    } else {
      setUser({
        employeeid: "",
        fullName: "",
        department: "",
        description: "",
        salary: "",
      });
    }
  }, [editData, open]);

  const handleAddDetails = () => {
    if (editData) {
      employeeStore.updateEmployee(user.employeeid, user);
    } else {
      employeeStore.addEmployee(user);
    }
    handleCloseButton();
  };

  return (
    <Modal open={open} onClose={handleCloseButton} aria-labelledby="add-details-title" aria-describedby="add-details-description">
      <Box sx={{ ...style, borderRadius: "7px" }}>
        <Typography variant="h6" textAlign="center" sx={{ fontWeight: 700, mb: 2 }}>
          Add Employee Details
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          type="number"
          label="Enter the Employee ID"
          variant="outlined"
          name="employeeid"
          onChange={inputHandler}
          value={user.employeeid}
        />
        <TextField
          fullWidth
          margin="normal"
          type="text"
          label="Enter the Name"
          variant="outlined"
          name="fullName"
          onChange={inputHandler}
          value={user.fullName}
        />
        <TextField
          fullWidth
          margin="normal"
          type="text"
          label="Enter the Department"
          variant="outlined"
          name="department"
          onChange={inputHandler}
          value={user.department}
        />
        <TextField
          fullWidth
          margin="normal"
          type="number"
          label="Enter the Salary"
          variant="outlined"
          name="salary"
          onChange={inputHandler}
          value={user.salary}
        />
        <TextField
          fullWidth
          margin="normal"
          type="text"
          label="Enter the Description"
          variant="outlined"
          name="description"
          onChange={inputHandler}
          value={user.description}
        />
        <Stack sx={{ justifyContent: "flex-end" }} direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Button onClick={handleCloseButton} sx={{ borderRadius: "20px", color: "red" }} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleAddDetails} sx={{ borderRadius: "20px" }} variant="outlined">
            Submit
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
});

export default AddDetails;
