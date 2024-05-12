// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import Icon from "@mui/material/Icon";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function RotatingCardFront({ color, image, icon, title, description }) {
  // get language from local storage
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
    <MKBox
      display="flex"
      justifyContent="center"
      alignContent="center"
      borderRadius="lg"
      coloredShadow={color}
      width="100%"
      position="relative"
      zIndex={2}
      sx={{
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85),
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85)
          )}, url(${image})`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
        height: selectedLanguage === "english" ? "350px" : "280px",
      }}
    >
      <MKBox py={5} px={3} textAlign="justify" lineHeight={1}>
        {icon && (
          <MKTypography variant="h2" color="white" my={2}>
            {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
          </MKTypography>
        )}
        <MKTypography variant="h5" color="white" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography
          variant="body2"
          color="white"
          opacity={0.8}
          // sx={{
          //   overflowY: "auto",
          //   maxHeight: "100px",
          //   "&::-webkit-scrollbar": {
          //     width: "2px",
          //   },
          //   "&::-webkit-scrollbar-thumb": {
          //     backgroundColor: "#a37913",
          //     borderRadius: "6px",
          //   },
          // }}
        >
          {description}
        </MKTypography>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the RotatingCardFront
RotatingCardFront.defaultProps = {
  color: "info",
  icon: "",
};

// Typechecking props for the RotatingCardFront
RotatingCardFront.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "gold",
  ]),
  image: PropTypes.string.isRequired,
  icon: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

export default RotatingCardFront;
