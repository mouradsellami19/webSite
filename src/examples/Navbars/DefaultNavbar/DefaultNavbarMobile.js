import { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";

function DefaultNavbarMobile({ routes, open }) {
  const [collapse, setCollapse] = useState("");

  const handleSetCollapse = (name) => (collapse === name ? setCollapse(false) : setCollapse(name));

  const [language, setLanguage] = useState("english"); // State variable for language selection
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false); // State variable for dropdown visibility

  // Event handler for language change
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
    console.log("Selected Language:", selectedLanguage);
    window.location.reload();
  };

  // Event handler for toggling language dropdown
  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    console.log("Selected language from local storage:", storedLanguage);
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const renderNavbarItems = routes.map(
    ({ name, arabicName, icon, collapse: routeCollapses, href, route, collapse: navCollapse }) => (
      <DefaultNavbarDropdown
        key={name}
        name={language === "english" ? name : arabicName}
        icon={icon}
        collapseStatus={name === collapse}
        onClick={() => handleSetCollapse(name)}
        href={href}
        route={route}
        collapse={Boolean(navCollapse)}
      >
        <MKBox sx={{ height: "15rem", maxHeight: "15rem", overflowY: "scroll" }}>
          {routeCollapses &&
            routeCollapses.map((item) => (
              <MKBox key={item.name} px={2}>
                {item.collapse ? (
                  <>
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                    >
                      {language === "english" ? item.name : item.arabicName}
                      {item.name}
                    </MKTypography>
                    {item.collapse.map((el) => (
                      <MKTypography
                        key={el.name}
                        component={el.route ? Link : MuiLink}
                        to={el.route ? el.route : ""}
                        href={el.href ? el.href : ""}
                        target={el.href ? "_blank" : ""}
                        rel={el.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: grey[200],
                            color: dark.main,
                          },
                        })}
                      >
                        {el.name}
                      </MKTypography>
                    ))}
                  </>
                ) : (
                  <MKBox
                    key={item.key}
                    display="block"
                    component={item.route ? Link : MuiLink}
                    to={item.route ? item.route : ""}
                    href={item.href ? item.href : ""}
                    target={item.href ? "_blank" : ""}
                    rel={item.href ? "noreferrer" : "noreferrer"}
                    sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",
                      py: 1,
                      px: 1.625,

                      "&:hover": {
                        backgroundColor: grey[200],
                        color: dark.main,

                        "& *": {
                          color: dark.main,
                        },
                      },
                    })}
                  >
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      {item.name}
                    </MKTypography>
                    <MKTypography
                      display="block"
                      variant="button"
                      color="text"
                      fontWeight="regular"
                      sx={{ transition: "all 300ms linear" }}
                    >
                      {item.description}
                    </MKTypography>
                  </MKBox>
                )}
              </MKBox>
            ))}
        </MKBox>
      </DefaultNavbarDropdown>
    )
  );

  return (
    <Collapse
      in={Boolean(open)}
      timeout="auto"
      unmountOnExit
      sx={{
        textAlign: language === "arabic" ? "right" : "inherit",
      }}
    >
      <MKBox
        width="calc(100% + 1.625rem)"
        my={2}
        ml={-2}
        display="flex"
        flexDirection="column"
        alignItems={language === "arabic" ? "flex-end" : "flex-start"}
      >
        {renderNavbarItems}
      </MKBox>
      <FormControl
        sx={{
          paddingRight: language === "arabic" ? 2 : 0,
        }}
      >
        <Select
          value={language}
          onChange={handleLanguageChange}
          open={languageDropdownOpen}
          onClose={toggleLanguageDropdown}
          onOpen={toggleLanguageDropdown}
          sx={{
            backgroundColor: "#ffe5a6",
            borderRadius: "20px",
            padding: "5px",
            fontSize: "16px",
          }}
        >
          <MenuItem
            value="english"
            style={{
              backgroundColor: language === "english" ? "#ac8a33" : "inherit",
              color: "black",
            }}
          >
            {language === "english" ? "English" : "الإنجليزية"}
          </MenuItem>
          <MenuItem
            value="arabic"
            style={{
              backgroundColor: language === "arabic" ? "#ac8a33" : "inherit",
              color: "black",
            }}
          >
            {language === "english" ? "Arabic" : "العربية"}
          </MenuItem>
        </Select>
      </FormControl>
    </Collapse>
  );
}

// Typechecking props for the DefaultNavbarMobile
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
