import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMenu } from "../menu/MenuProvider";

const Logged = () => {
  const setOpen = useMenu();

  return (
    <Tooltip title="Open settings">
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={() => setOpen(true)}
      >
        <Avatar
          alt="User, form freepik"
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png?w=740&t=st=1688902287~exp=1688902887~hmac=365dfb185bad9f56cac9c588cec6862d7614dc73f69de1ee278d9c305a3c9fd7"
        />
      </IconButton>
    </Tooltip>
  );
};

export default Logged;
