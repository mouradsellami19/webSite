import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Images
import ourvision from "assets/images/about-us-our-vision.jpg";
import marketing from "assets/images/about-us-marketing.jpg";
import consulting from "assets/images/about-us-consult.jpg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="flex-start">
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={ourvision}
              title="OUR VISION"
              description="We provide fast solutions and unique technologies in high quality. We strive continually to search and develop and find new ways to enable us to fulfill all the needs of our clients based on local and international standards using latest technologies and applications without affecting the safety and quality standards."
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={marketing}
              title="MARKETING"
              description="Sorouh Chemicals Co. is aware that proper response to market requirements and client needs form the most important and ideal methods to gain clients satisfaction. Therefore, it has established a network of accredited distributers to cover cities all over Libya (i.e Tripoli, Benghazi, Misrata, Sirte and Sebha) which has enabled us to have a competitive edge thus providing a better service to our clients."
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={consulting}
              title="Consulting services"
              description="With extensive experience and partnerships with top brands, Sorouh Chemicals Co. offers comprehensive consultation and support services from project planning to establishment, operation, and development. We provide technical guidance to various companies and contractors involved in crucial projects, particularly infrastructure projects in Libya."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
