import React, { useState } from "react";
import MKPagination from "components/MKPagination";
import Icon from "@mui/material/Icon";
import Container from "@mui/material/Container";
import {
  Grid,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Divider,
} from "@mui/material";

// Presentation page components
import ProductCard from "../components/ProductCard";

// Data
import data from "pages/Presentation/sections/data/productsData";

const ProductsBlock = () => {
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
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = data.reduce((acc, category) => {
    const filteredItems = category.items.filter(
      (item) =>
        (!categoryFilter || category.category === categoryFilter) &&
        (!searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
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
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
          <Typography variant="h6">{"Filter by Category"}</Typography>
          <ToggleButtonGroup
            color="info"
            fullWidth={true}
            orientation="vertical"
            value={categoryFilter}
            exclusive
            onChange={handleCategoryChange}
          >
            {data.map((category) => (
              <ToggleButton key={category.category} value={category.category}>
                {category.category}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={9}>
        <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
          <TextField
            label="Search by Name"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ marginBottom: "16px" }}
          />

          <Grid container spacing={2}>
            {filteredProducts.map((category, index) => (
              <React.Fragment key={category.category}>
                <Grid item xs={12}>
                  <Typography variant="h5" style={{ marginBottom: "8px" }}>
                    {category.category}
                  </Typography>
                  <Divider sx={{ borderColor: "#191919", borderWidth: 2, margin: "8px 0" }} />
                </Grid>
                {category.items.map((item) => (
                  <Grid key={item.name} item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard {...item} />
                  </Grid>
                ))}
                {index < filteredProducts.length - 1 && (
                  <Divider sx={{ borderColor: "#191919", borderWidth: 2, margin: "8px 0" }} />
                )}{" "}
                {/* Add divider if not the last category */}
              </React.Fragment>
            ))}
          </Grid>
          <Divider sx={{ borderColor: "#191919", borderWidth: 2, margin: "8px 0" }} />
          <Container sx={{ height: "100%" }}>
            <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
              <MKPagination>
                <MKPagination item>
                  <Icon>keyboard_arrow_left</Icon>
                </MKPagination>
                <MKPagination item active>
                  1
                </MKPagination>
                <MKPagination item>2</MKPagination>
                <MKPagination item>3</MKPagination>
                <MKPagination item>4</MKPagination>
                <MKPagination item>5</MKPagination>
                <MKPagination item>
                  <Icon>keyboard_arrow_right</Icon>
                </MKPagination>
              </MKPagination>
            </Grid>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductsBlock;
