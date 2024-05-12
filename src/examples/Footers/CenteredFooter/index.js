// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function CenteredFooter({ content }) {
  const { socials, menus, copyright, light } = content;

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
    <MKBox component="footer" py={6}>
      <Grid container justifyContent="center">
        {menus.map(({ name: title, items }) => (
          <Grid key={title} item xs={10} lg={8} display="flex" justifyContent="space-evenly">
            {items.map(({ name, arabicName, route }) => (
              <Stack
                key={name}
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                spacing={{ xs: 2, lg: 3, xl: 6 }}
                mb={3}
              >
                <MKTypography
                  component={Link}
                  to={route}
                  variant="button"
                  fontWeight="bold"
                  textTransform="capitalize"
                  sx={{ fontSize: "1rem", color: "#a37913" }}
                >
                  {selectedLanguage === "arabic" ? arabicName : name}
                </MKTypography>
              </Stack>
            ))}
          </Grid>
        ))}
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {socials.map(({ icon, link }) => (
              <MKTypography
                key={link}
                component="a"
                href={link}
                variant="body2"
                color={light ? "white" : "secondary"}
                fontWeight="regular"
                fontSize="2rem"
              >
                {icon}
              </MKTypography>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          {copyright}
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default CenteredFooter;
