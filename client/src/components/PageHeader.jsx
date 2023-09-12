import { string } from "prop-types";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";

const PageHeader = ({ title, subtitle }) => {
  return (
    <>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography variant="h5" component="h2">
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

PageHeader.prototype = {
  title: string.isRequired,
  subtitle: string.isRequired,
};

export default PageHeader;
