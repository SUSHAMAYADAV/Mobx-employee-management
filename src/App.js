import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddDetails from "./Components/AddDetails";
import TableList from "./Components/TableList";

const App = observer(() => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleOpenButton = () => {
    setOpen(true);
    setEditData(null);
  };

  const handleCloseButton = () => {
    setOpen(false);
    setEditData(null);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" align="center" gutterBottom>
          Employee Management
        </Typography>
        <Button
          variant="contained"
          sx={{ mb: 2 }}
          color="primary"
          onClick={handleOpenButton}
        >
          Add Employee
        </Button>
      </Box>
      <AddDetails
        open={open}
        handleCloseButton={handleCloseButton}
        editData={editData}
      />
      <TableList setOpen={setOpen} setEditData={setEditData} />
    </Box>
  );
});

export default App;
