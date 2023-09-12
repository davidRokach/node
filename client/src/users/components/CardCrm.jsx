import {
  Box,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useSnackbar } from "../../provider/SnackbarProvider";

const CardCrm = ({ users, handleDialog, handleChangeBusinessStatus }) => {
  const snack = useSnackbar();

  return (
    <Grid container spacing={2} pb={2}>
      {users.map((user) => (
        <Grid item xs={12} key={user._id}>
          <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
            <Card sx={{ width: 320 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {user._id}
                </Typography>
                <Typography variant="h5" component="div">
                  {user.name.first + " " + user.name.last}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  name
                </Typography>
                <Typography variant="body2">
                  {user.phone}
                  <br />
                  {user.email}
                </Typography>
              </CardContent>
              <CardActions sx={{ margin: "auto" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={user.isBusiness}
                      onClick={(e) => {
                        const updateUser = handleChangeBusinessStatus(user._id);
                        e.target.value = updateUser.isBusiness;
                      }}
                    />
                  }
                  label="isBusiness"
                />
                <FormControlLabel
                  control={<Checkbox checked={user.isAdmin} />}
                  label="isAdmin"
                />
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
              </CardActions>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardCrm;
