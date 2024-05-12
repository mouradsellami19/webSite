import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Tooltip from "@mui/material/Tooltip";

import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/Weber-Logo.png";
import { useState, useEffect } from "react";
function Download() {
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
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.7}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid
            container
            item
            xs={12}
            md={7}
            justifyContent="center"
            mx="auto"
            textAlign="center"
            flexDirection="column"
          >
            <MKTypography variant="h3" color="white">
              {selectedLanguage === "english" ? "Do you want to" : "هل تريد"}
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              {selectedLanguage === "english"
                ? "Discover our shop &amp; products?"
                : "اكتشف متجرنا ومنتجاتنا ؟"}
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              {selectedLanguage === "english"
                ? "Cause if you do, we are offering a large variety that will fulfill your needs."
                : "لأنه إذا كنت ترغب في ذلك، فنحن نقدم لك مجموعة كبيرة ومتنوعة تلبي احتياجاتك"}
            </MKTypography>
            <Link to={"/pages/landing-pages/products-list"}>
              <MKButton variant="gradient" color="gold" size="large" sx={{ mb: 2 }}>
                {selectedLanguage === "english" ? "Discover" : "اكتشف"}
              </MKButton>
            </Link>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
