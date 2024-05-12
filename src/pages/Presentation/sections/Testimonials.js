import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import AlMokawloon from "assets/images/logos/clients-logos/Al-Mokawloon.png";
import LibyaNOC from "assets/images/logos/clients-logos/Libya-NOC.jpg";
import agocLogo from "assets/images/logos/clients-logos/agoc.png";
import auccLogo from "assets/images/logos/clients-logos/aucc.png";
// import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
// import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";
import MKAvatar from "components/MKAvatar";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h1">Trusted by over</MKTypography>
          <MKTypography variant="h1" color="gold" textGradient mb={2}>
            52 Company
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            We provide fast solutions and unique technologies in high quality.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="light"
              variant="gradient"
              name="Nick Willever"
              date="1 day ago"
              review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="light"
              variant="gradient"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="light"
              variant="gradient"
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKAvatar src={AlMokawloon} alt="AlMokawloon" variant="square" size="xxl" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKAvatar src={LibyaNOC} alt="LibyaNOC" variant="square" size="xxl" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKAvatar src={agocLogo} alt="agoc" variant="square" size="xxl" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKAvatar src={auccLogo} alt="aucc" variant="square" size="xxl" />
          </Grid>

          {/* <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={AlMokawloon} alt="AlMokawloon" width="100%" />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={LibyaNOC} alt="LibyaNOC" width="60%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={agocLogo} alt="agoc" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
