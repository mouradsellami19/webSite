// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import Tooltip from "@mui/material/Tooltip";
import { Chip } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React, { useState, useEffect } from "react";
function ExampleCard({ image, name, itemDescription, count, pro, ...rest }) {
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

  const imageTemplate = (
    <MKBox
      bgColor="white"
      borderRadius="xl"
      shadow="lg"
      minHeight="2rem"
      sx={{
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        },
      }}
      {...rest}
    >
      {pro && (
        <MKBox position="absolute" top={0} right={0} zIndex={2} p={1}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g id="lock-black" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <circle id="Oval" fill="#1F2937" cx="12" cy="12" r="12" />
              <g
                id="padlock"
                transform="translate(7.000000, 5.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path d="M5,0 C3.16666667,0 1.66666667,1.5 1.66666667,3.33333333 L1.66666667,4.58333333 C0.666666667,5.5 0,6.83333333 0,8.33333333 C0,11.0833333 2.25,13.3333333 5,13.3333333 C7.75,13.3333333 10,11.0833333 10,8.33333333 C10,6.83333333 9.33333333,5.5 8.33333333,4.58333333 L8.33333333,3.33333333 C8.33333333,1.5 6.83333333,0 5,0 Z M5.83333333,8.91666667 L5.83333333,10.8333333 L4.16666667,10.8333333 L4.16666667,8.91666667 C3.66666667,8.66666667 3.33333333,8.08333333 3.33333333,7.5 C3.33333333,6.58333333 4.08333333,5.83333333 5,5.83333333 C5.91666667,5.83333333 6.66666667,6.58333333 6.66666667,7.5 C6.66666667,8.08333333 6.33333333,8.66666667 5.83333333,8.91666667 Z M6.66666667,3.66666667 C6.16666667,3.41666667 5.58333333,3.33333333 5,3.33333333 C4.41666667,3.33333333 3.83333333,3.41666667 3.33333333,3.66666667 L3.33333333,3.33333333 C3.33333333,2.41666667 4.08333333,1.66666667 5,1.66666667 C5.91666667,1.66666667 6.66666667,2.41666667 6.66666667,3.33333333 L6.66666667,3.66666667 Z" />
              </g>
            </g>
          </svg>
        </MKBox>
      )}
      <MKBox
        component="img"
        src={image}
        alt={name}
        width="100%"
        my="auto"
        opacity={pro ? 0.6 : 1}
      />
    </MKBox>
  );

  return (
    <MKBox position="relative">
      {pro ? (
        <Tooltip title="Pro Element" placement="top">
          {imageTemplate}
        </Tooltip>
      ) : (
        imageTemplate
      )}
      {name || itemDescription || count > 0 ? (
        <MKBox mt={1} ml={1} lineHeight={1}>
          {name && (
            <MKTypography variant="h4" fontWeight="bold">
              {name}
            </MKTypography>
          )}
          {itemDescription && (
            <MKTypography
              justifyContent="flex-start"
              variant="h6"
              color="black"
              sx={{
                overflowY: "auto",
                maxHeight: "80px",
                textAlign: selectedLanguage === "arabic" ? "right" : "inherit",
                "&::-webkit-scrollbar": {
                  width: "12px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#a37913", // Remplacez par la couleur souhaitée
                  borderRadius: "6px",
                },
              }}
            >
              {itemDescription}
            </MKTypography>
          )}
          {count > 0 && (
            <Chip
              icon={<ShoppingCartIcon />}
              label={selectedLanguage === "english" ? "Available" : "متوفر"}
              color="success"
              sx={{ float: selectedLanguage === "arabic" ? "right" : "left" }}
            />
          )}
        </MKBox>
      ) : null}
    </MKBox>
  );
}

// Setting default props for the ExampleCard
ExampleCard.defaultProps = {
  name: "",
  count: 0,
  pro: false,
};

// Typechecking props for the ExampleCard
ExampleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  itemDescription: PropTypes.string,
  count: PropTypes.number,
  pro: PropTypes.bool,
};

export default ExampleCard;
