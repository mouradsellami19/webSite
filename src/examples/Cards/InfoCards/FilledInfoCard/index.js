// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import { useState, useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function FilledInfoCard({ variant, color, icon, title, description, action }) {
  // get language from local storage
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "english"
  );

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const buttonStyles = {
    width: "max-content",
    display: "flex",
    alignItems: "center",
    justifyContent: selectedLanguage === "english" ? "flex-start" : "flex-end", // Align right if not English
    flexDirection: selectedLanguage === "english" ? "row" : "row-reverse",

    "& .material-icons-round": {
      fontSize: "1.125rem",
      transform: `translateX(3px)`,
      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(6px)`,
    },
  };

  let iconColor = color;

  if (variant === "gradient" && color !== "light") {
    iconColor = "white";
  } else if (variant === "gradient" && color === "light") {
    iconColor = "dark";
  }

  return (
    <MKBox
      display={{ xs: "block", md: "flex" }}
      sx={{ flexDirection: selectedLanguage === "arabic" ? "row-reverse" : "inherit" }}
      variant={variant}
      bgColor={variant === "contained" ? "#ececec" : color}
      borderRadius="xl"
      pt={3.5}
      pb={3}
      px={3}
      borderWidth={1}
      border="2px solid #a37913"
    >
      <MKTypography
        display="block"
        variant="h3"
        color={iconColor}
        textGradient={variant === "contained"}
        mt={-0.625}
      >
        {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
      </MKTypography>
      <MKBox
        pt={{ xs: 3, md: 0 }}
        pl={{ xs: 0, md: 2 }}
        lineHeight={1}
        sx={{
          textAlign: selectedLanguage === "arabic" ? "right" : "inherit",
        }}
      >
        <MKTypography
          display="block"
          variant="5"
          color={variant === "contained" || color === "light" ? "dark" : "white"}
          fontWeight="bold"
          mb={1}
        >
          {title}
        </MKTypography>
        <MKTypography
          display="block"
          variant="body2"
          color={variant === "contained" || color === "light" ? "text" : "white"}
          mb={2}
          sx={{
            overflowY: "auto",
            maxHeight: "200px",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#a37913", // Remplacez par la couleur souhaitée
              borderRadius: "6px",
            },
          }}
        >
          {description}
        </MKTypography>
        {action && action.type === "external" ? (
          <MKTypography
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
            color={variant === "contained" ? color : "white"}
            ml={selectedLanguage === "english" ? "inherit" : "auto"}
            sx={buttonStyles}
          >
            {action.label}{" "}
            <Icon sx={{ fontWeight: "bold" }}>
              {selectedLanguage === "english" ? "arrow_forward" : "arrow_back"}
            </Icon>
          </MKTypography>
        ) : null}
        {action && action.type === "internal" ? (
          <MKTypography
            component={Link}
            to={action.route}
            variant="body2"
            fontWeight="regular"
            color={variant === "contained" ? color : "white"}
            ml={selectedLanguage === "english" ? "inherit" : "auto"}
            sx={buttonStyles}
          >
            {action.label}{" "}
            <Icon sx={{ fontWeight: "bold" }}>
              {selectedLanguage === "english" ? "arrow_forward" : "arrow_back"}
            </Icon>
          </MKTypography>
        ) : null}
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the FilledInfoCard
FilledInfoCard.defaultProps = {
  variant: "contained",
  color: "info",
  action: false,
};

// Typechecking props for the FilledInfoCard
FilledInfoCard.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "gold",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default FilledInfoCard;
