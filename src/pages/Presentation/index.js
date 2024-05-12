import { useState, useEffect } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";
import ScrollTopButton from "pages/LandingPages/ProductsList/ScrollTopButton";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";
import bgPage from "assets/images/bg-page.jpg";

function Presentation() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "english"
  );

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    console.log("Selected language from local storage:", selectedLanguage);
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.1),
              rgba(gradients.dark.state, 0.1)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              opacity={0.8}
              mt={-6}
              mb={1}
              textAlign="center"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {selectedLanguage === "english" ? "Sorouh Chemicals Co." : "شركة صروح للكيماويات"}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={2}
            >
              {selectedLanguage === "english"
                ? "Solutions for construction and renovation"
                : "حلول للبناء والتجديد"}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundImage: `url(${bgPage})`,
          // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          // backdropFilter: "saturate(200%) blur(30px)",
          // boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="contained"
                color="gold"
                icon="store"
                title={selectedLanguage === "english" ? "Products" : "المنتجات"}
                description={
                  selectedLanguage === "english"
                    ? "Take pleasure in discovering our large and diverse collection of products"
                    : "استمتع باكتشاف مجموعتنا الكبيرة والمتنوعة من المنتجات"
                }
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/products-list",
                  label: selectedLanguage === "english" ? "Discover more" : "اكتشف المزيد",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="contained"
                color="gold"
                icon="info"
                title={selectedLanguage === "english" ? "About us" : "عن صروح"}
                description={
                  selectedLanguage === "english"
                    ? "Read our captivating story from the very beginning to the meticulous crafting of our innovative ideas"
                    : "اقرأ قصتنا منذ البداية وحتى الصياغة الدقيقة لأفكارنا المبتكرة"
                }
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/about-us",
                  label: selectedLanguage === "english" ? "Read more" : "اقرأ المزيد",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="contained"
                color="gold"
                icon="email"
                title={selectedLanguage === "english" ? "Contact us" : "اتصل بنا"}
                description={
                  selectedLanguage === "english"
                    ? "Feel free to contact us, discuss with us, or access the most frequent answers"
                    : "لا تتردد في الاتصال بنا أو المناقشة معنا أو الحصول على الإجابات الأكثر شيوعًا"
                }
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/contact-us",
                  label: selectedLanguage === "english" ? "Contact us" : "اتصل بنا",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Download />
      </Card>
      <ScrollTopButton />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
