import {
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSnackbar } from "../../provider/SnackbarProvider";

const TableCrm = ({ users, handleDialog, handleChangeBusinessStatus }) => {
  const snack = useSnackbar();

  return (
    <TableContainer
      component={Paper}
      sx={{ display: { xs: "none", md: "inline-flex" } }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id </TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">isAdmin</TableCell>
            <TableCell align="right">isBusiness</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, handleDialog) => (
            <TableRow
              key={user._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user._id}
              </TableCell>
              <TableCell align="right">
                {user.name.first + " " + user.name.last}
              </TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">
                <Checkbox checked={user.isAdmin} />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={user.isBusiness}
                  onClick={(e) => {
                    const updateUser = handleChangeBusinessStatus(user._id);
                    e.target.value = updateUser.isBusiness;
                  }}
                />
              </TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="delete user"
                  onClick={() => {
                    if (user.isAdmin)
                      return snack(
                        "You cannot delete a user of type admin",
                        "error"
                      );
                    handleDialog("open", user._id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCrm;
