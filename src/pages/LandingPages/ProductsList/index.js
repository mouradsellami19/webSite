import Card from "@mui/material/Card";
import MKAvatar from "components/MKAvatar";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import MKBox from "components/MKBox";
// import MKPagination from "components/MKPagination";
// import Icon from "@mui/material/Icon";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import {
  Grid,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Modal,
  Box,
  Typography,
} from "@mui/material";

import ScrollTopButton from "./ScrollTopButton";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

//Images
import bgImage from "assets/images/bg-products.jpg";

import React, { useState, useEffect } from "react";
// import axios from "axios";

//data
import data from "pages/Presentation/sections/data/productsData";
import MKTypography from "components/MKTypography";
// import CircleIcon from "@mui/icons-material/Circle";
import AddIcon from "@mui/icons-material/Add";
// const styleProduct = {
//   border: "2px solid #a37913",
//   borderRadius: "1.25rem",
// };

const ProductList = () => {
  //  POP-UP
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleClose = () => setOpen(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "english"
  );

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);
  // FILTER AND SEARCH
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = data.reduce((acc, category) => {
    var filteredItems = [];
    if (selectedLanguage === "english") {
      filteredItems = category.items.filter(
        (item) =>
          (!categoryFilter || category.name === categoryFilter) &&
          (!searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    } else {
      filteredItems = category.items.filter(
        (item) =>
          (!categoryFilter || category.arname === categoryFilter) &&
          (!searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    if (filteredItems.length > 0) {
      acc.push({
        ...category,
        items: filteredItems,
      });
    }
    return acc;
  }, []);
  const handleCategoryChange = (_, newCategory) => {
    setCategoryFilter(newCategory);
    console.log(newCategory);
  };
  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #a37913",
    borderRadius: "1.25rem",
    boxShadow: 24,
    textAlign: selectedLanguage === "arabic" ? "right" : "inherit",
    flexDirection: selectedLanguage === "english" ? "row" : "row-reverse",
    p: 4,
    "@media (max-width: 768px)": {
      width: 300, // Changez cette valeur en fonction de votre besoin
    },
    "@media (min-width: 769px) and (max-width: 1024px)": {
      width: 400, // Changez cette valeur en fonction de votre besoin
    },
    "@media (min-width: 1025px)": {
      width: 700, // Changez cette valeur en fonction de votre besoin
    },
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 4;
  const totalCategories = filteredProducts.length;
  const lastCategoryIndex = currentPage * categoriesPerPage;
  const firstCategoryIndex = lastCategoryIndex - categoriesPerPage;
  const currentCategories = filteredProducts.slice(firstCategoryIndex, lastCategoryIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    const element = document.getElementById("productsBlock");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  // PRODUCT IMAGE TEMPLATE
  const imageTemplate = (item) => (
    <MKBox
      bgColor="white"
      shadow="lg"
      minHeight="10rem"
      sx={{
        border: "2px solid #a37913",
        borderRadius: "1.25rem",
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
    >
      <MKBox component="img" src={item.image} width="100%" my="auto" />
    </MKBox>
  );

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            flexDirection: selectedLanguage === "arabic" ? "row-reverse" : "inherit",
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            {selectedLanguage === "english" ? "Products" : "منتجات"}
          </MKTypography>
        </MKBox>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* Products block */}
        <Grid container spacing={3} id={"productsBlock"}>
          {/* Filter by category */}
          <Grid item xs={12} sm={3}>
            <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
              <MKTypography
                variant="h6"
                sx={{
                  textAlign: selectedLanguage === "arabic" ? "right" : "inherit",
                  color: "#a37913",
                }}
              >
                {selectedLanguage === "english" ? "Filter by Category" : "تصنيف حسب الفئة"}
              </MKTypography>
              <ToggleButtonGroup
                color="warning"
                fullWidth={true}
                orientation="vertical"
                value={categoryFilter}
                exclusive
                onChange={handleCategoryChange}
              >
                {data.map((category) => (
                  <ToggleButton
                    key={category.id}
                    value={selectedLanguage === "english" ? category.name : category.arname}
                  >
                    <MKTypography
                      variant="caption"
                      color="black"
                      fontWeight="normal"
                      mb={1}
                      pr={2}
                      sx={{ textAlign: "center" }}
                    >
                      {selectedLanguage === "english" ? category.name : category.arname}
                    </MKTypography>
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={9}>
            <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
              {/* Search filter */}
              <TextField
                label={selectedLanguage === "english" ? "Search by Name" : "البحث حسب الاسم"}
                type="search"
                variant="outlined"
                fullWidth
                dir={selectedLanguage === "english" ? "ltr" : "rtl"}
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ marginBottom: "16px" }}
              />
              {/* Products display */}
              <Grid container spacing={2}>
                {currentCategories.map((category) => (
                  <React.Fragment key={category.category}>
                    <Grid item xs={12}>
                      <MKTypography
                        variant="h5"
                        style={{ marginBottom: "8px" }}
                        textAlign={selectedLanguage === "english" ? "left" : "right"}
                        pl={selectedLanguage === "english" ? 2 : 0}
                        pr={selectedLanguage === "english" ? 0 : 2}
                      >
                        {selectedLanguage === "english" ? category.name : category.arname}
                      </MKTypography>
                      <Divider sx={{ borderColor: "#191919", borderWidth: 2, margin: "8px 0" }} />
                    </Grid>
                    {category.items.map((item) => (
                      <Grid
                        container
                        key={item.arname}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        justifyContent="flex-start"
                        direction="ltr"
                      >
                        <MKBox position="relative" onClick={() => handleItemClick(item)}>
                          {imageTemplate(item)}
                          <MKBox mt={1} ml={1} lineHeight={1} textAlign="center">
                            {item.name && (
                              <MKTypography variant="h6" fontWeight="bold">
                                {selectedLanguage === "english" ? item.name : item.name}
                              </MKTypography>
                            )}
                          </MKBox>
                        </MKBox>
                      </Grid>
                    ))}
                    {category.id < currentCategories.length - 1 && (
                      <Divider sx={{ borderColor: "#191919", borderWidth: 2, margin: "8px 0" }} />
                    )}{" "}
                    {/* Add divider if not the last category */}
                  </React.Fragment>
                ))}

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styleModal}>
                    <MKBox
                      display="flex"
                      flexDirection={selectedLanguage === "english" ? "row" : "row-reverse"}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <MKTypography color="gold" id="modal-modal-title" variant="h4" component="h2">
                        {selectedItem && selectedItem.name}
                      </MKTypography>
                      {selectedItem && selectedItem.image && (
                        <MKAvatar
                          src={selectedItem.image}
                          alt={selectedItem.arname}
                          variant="rounded"
                          size="lg"
                          shadow="md"
                        />
                      )}
                    </MKBox>
                    <Typography
                      id="modal-modal-description"
                      textAlign={selectedLanguage === "english" ? "justify" : "right"}
                      sx={{ mt: 2 }}
                    >
                      {selectedLanguage === "english"
                        ? selectedItem && selectedItem.description
                        : selectedItem && selectedItem.arDescription}
                    </Typography>
                    {selectedItem && selectedItem.moreDescription && (
                      <>
                        <Typography variant="h4" sx={{ mt: 2 }}>
                          {selectedLanguage === "english"
                            ? "More details :"
                            : ": المزيد من التفاصيل "}
                        </Typography>
                        {selectedItem &&
                          selectedItem.moreDescription.map((detail, index) => (
                            <Typography
                              key={index}
                              variant="h6"
                              flexDirection={selectedLanguage === "english" ? "row" : "row-reverse"}
                              sx={{ mt: 1, display: "flex", alignItems: "center" }}
                            >
                              <AddIcon fontSize="small" color="gold" sx={{ mr: 1 }} />
                              {selectedLanguage === "english" ? detail.detail : detail.ardetail}
                            </Typography>
                          ))}
                      </>
                    )}
                  </Box>
                </Modal>
              </Grid>
              <Divider sx={{ borderColor: "#191919", borderWidth: 2, margin: "8px 0" }} />

              <Container sx={{ height: "100%" }}>
                <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
                  <Stack spacing={2} sx={{ justifyContent: "center", marginTop: 2 }}>
                    <Pagination
                      count={Math.ceil(totalCategories / categoriesPerPage)}
                      page={currentPage}
                      onChange={handlePageChange}
                      color="warning"
                    />
                  </Stack>
                </Grid>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </Card>
      <ScrollTopButton />

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default ProductList;
