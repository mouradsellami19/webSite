// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

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
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ mb: 3 }}
            display="flex"
            fleDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <MKBox>
              <Link to={brand.route}>
                <MKBox component="img" src={brand.image} alt={brand.name} maxWidth="7rem" mb={2} />
              </Link>
            </MKBox>
            <MKBox display="flex" alignItems="center">
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
          {menus.map(({ name: title, arabicTitle, items }) => (
            <Grid
              key={title}
              item
              xs={6}
              md={4}
              sx={{
                mb: 3,
                textAlign: selectedLanguage === "arabic" ? "right" : "inherit",
              }}
            >
              <MKTypography
                display="block"
                variant="h5"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
                sx={{ color: "#a37913" }}
              >
                {selectedLanguage === "english" ? title : arabicTitle}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ icon, name, arabicName, route }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {selectedLanguage === "arabic" ? (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {arabicName}&nbsp;{icon}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {icon}&nbsp; {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
