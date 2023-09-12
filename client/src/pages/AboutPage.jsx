import { Container, Grid, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";

const AboutPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <PageHeader
          title="About page"
          subtitle="On this page you can find explanations about using the application"
        />

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              <b> Welcome to our online business card creation platform!</b>
              <br />
              We're here to help you make a lasting impression with sleek and
              professional business cards. <br />
              Our user-friendly website offers seamless card and user
              management, ensuring that your experience is both efficient and
              enjoyable. With our intuitive interface, designing your
              personalized business cards has never been easier. Simply follow
              these steps to get started:
            </Typography>

            <Typography variant="body1">
              <br />
              <b>Sign up or log in:</b> Create an account with us or log in if
              you're already a member. It's quick and hassle-free. <br />
              <b>Customize with ease:</b> Once you've selected a template,
              unleash your creativity! Add your company logo, personal details,
              and any other relevant information. Our user-friendly
              customization tools reflects your professionalism and creativity.
              <br />
              <b>Manage your cards:</b> Our platform provides a convenient card
              management system. Save your designs, make updates, and reorder
              cards effortlessly. You'll always have access to your previous
              designs, allowing for easy edits or reprints whenever necessary.
              <br />
              <br />
              Whether you're a seasoned entrepreneur, a freelancer, or just
              starting your business journey, our platform is designed to
              simplify the process of creating and managing your business cards.
              We're committed to providing an exceptional user experience,
              ensuring that you can effortlessly showcase your professionalism
              and leave a lasting impression on potential clients and business
              partners. Join us today and elevate your networking game with our
              seamless business card creation and management tools. Get ready to
              make connections that count!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
            }}
          >
            <img src="/assets/images/card.jpg" alt="card" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutPage;
