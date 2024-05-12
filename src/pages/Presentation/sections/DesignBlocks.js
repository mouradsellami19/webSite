// react-router-dom components
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/designBlocksData";
// import bgLogoAr from "assets/images/logo-sorouh-ar.jpg";

function DesignBlocks() {
  // get language from local storage
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "english"
  );

  const [selectedTitle, setSelectedTitle] = useState(null);
  const selectedTitleRef = useRef(null);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    console.log("Selected language from local storage:", selectedLanguage);
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const handleTitleClick = (title) => {
    setSelectedTitle(selectedTitle === title ? null : title);
    // Scroll to the selected title after state update
    if (selectedTitleRef.current) {
      selectedTitleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const renderData = data.map(({ title, arTitle, description, arDescription, items }) => (
    <Grid
      container
      spacing={3}
      sx={{ mb: 5 }}
      key={title}
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      ref={selectedTitle === title ? selectedTitleRef : null}
    >
      <Grid
        item
        xs={12}
        lg={3}
        onClick={() => handleTitleClick(title)}
        style={{ cursor: "pointer" }}
      >
        <MKBox
          position="sticky"
          display="flex"
          justifyContent={selectedLanguage === "arabic" ? "flex-end" : "flex-start"}
          top="100px"
          pb={{ xs: 2, lg: 6 }}
          border="2px solid #a37913"
          borderRadius="xl"
          px={3}
          pt={3.5}
          bgColor="#ececec"
        >
          <MKTypography
            fontSize={{ xs: 16, lg: 24 }}
            variant="h3"
            fontWeight="bold"
            textDecoration="none"
            overflow="hidden"
            transition="transform 0.2s ease-in-out"
            willChange="transform"
            zIndex={0}
            sx={{
              color: "#a37913",
              ml: 1,
              mr: 0.25,
              position: "relative", // Ensure position relative for absolute positioning of pseudo-element
              "&::after": {
                backgroundColor: "#a99e8f",
                borderRadius: "3rem",
                content: "''",
                display: "block",
                height: "10%",
                width: "100%",
                position: "absolute",
                left: 0,
                bottom: 0,
                transform: "rotate(10deg)",
                transformOrigin: "top left",
                transition: "transform 0.2s ease-out",
                willChange: "transform",
                zIndex: -1,
              },
              "&:hover::after": {
                transform: "translate(0, -50%)",
              },
              "&:hover": {
                border: "2px solid transparent",
                color: "black",
                transform: "scale(1.05)",
                willChange: "transform",
              },
            }}
          >
            {selectedLanguage === "english" ? title : arTitle}
          </MKTypography>
        </MKBox>
      </Grid>
      {selectedTitle === title && (
        <Grid item xs={12} lg={9}>
          <MKTypography
            variant="body1"
            color="black"
            fontWeight="regular"
            mb={1}
            pr={2}
            sx={{ textAlign: "center" }}
          >
            {selectedLanguage === "english" ? description : arDescription}
          </MKTypography>
          <Grid container spacing={3}>
            {items
              .slice(0, 4)
              .map(({ image, name, itemDescription, aritemDescription, count, route, pro }) => (
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{ mb: 2 }}
                  key={selectedLanguage === "english" ? name : name}
                >
                  <Link to={pro ? "/" : route}>
                    <ExampleCard
                      image={image}
                      name={selectedLanguage === "english" ? name : name}
                      itemDescription={
                        selectedLanguage === "english" ? itemDescription : aritemDescription
                      }
                      count={count}
                      pro={pro}
                    />
                  </Link>
                </Grid>
              ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  ));

  return (
    <MKBox component="section" my={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold" color="black">
            {selectedLanguage === "english"
              ? "Huge collection of products"
              : "مجموعة كبيرة من المنتجات"}
          </MKTypography>
          <MKTypography variant="body1" color="black">
            {selectedLanguage === "english"
              ? "We have arranged for you this rich catalogue"
              : "لقد أعددنا لك هذا الكتالوج الغني"}
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
