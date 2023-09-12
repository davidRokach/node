import {
  Avatar,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";

const ListsComponents = () => {
  return (
    <>
      <List sx={{ textAlignLast: "center" }}>
        <ListSubheader>sub header</ListSubheader>
        <ListItem disablePadding>
          <ListItemText primary="inbox" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="drafts" secondary="255651" />
        </ListItem>
      </List>

      <List sx={{ textAlignLast: "center" }}>
        <ListSubheader>sub header</ListSubheader>
        <ListItem divider>
          <ListItemText primary="inbox" />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="drafts" secondary="255651" />
        </ListItem>
      </List>

      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <List>
          <ListItemButton divider>
            <ListItemAvatar>
              <Avatar src="https://aharonbros.co.il/wp-content/uploads/2021/01/DSC_7509a-scaled.jpg" />
            </ListItemAvatar>
            <ListItemText primary="avatar" />
          </ListItemButton>
        </List>
      </Container>
    </>
  );
};

export default ListsComponents;
