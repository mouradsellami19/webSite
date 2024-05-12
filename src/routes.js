// import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ProductsList from "pages/LandingPages/ProductsList";
import ContactUs from "pages/LandingPages/ContactUs";

const routes = [
  // {
  //   name: "Activities",
  //   arabicName: "مجالات",
  //   icon: <Icon>category</Icon>,
  //   collapse: [
  //     {
  //       name: "Plasters mortars lime",
  //       arabicName: "طلاءات الملاط الجيري",
  //       description: "Discover more",
  //       arabicDescription: "مواد للبناء",
  //       route: "/pages/landing-pages/products-list",
  //       component: <ProductsList />,
  //     },
  //     {
  //       name: "Plaster skim coats finishes for rehabilitation",
  //       arabicName: "مواد للبناء",
  //       description: "Discover more",
  //       arabicDescription: "مواد للبناء",
  //       route: "/pages/landing-pages/products-list",
  //       component: <ProductsList />,
  //     },
  //     {
  //       name: "Underlays glues sealants",
  //       arabicName: "مواد للبناء",
  //       description: "Discover more",
  //       arabicDescription: "مواد للبناء",
  //       route: "/pages/landing-pages/products-list",
  //       component: <ProductsList />,
  //     },
  //     {
  //       name: "Waterproofing solutions",
  //       arabicName: "مواد للبناء",
  //       description: "Discover more",
  //       arabicDescription: "مواد للبناء",
  //       route: "/pages/landing-pages/products-list",
  //       component: <ProductsList />,
  //     },
  //     {
  //       name: "Laying tiles",
  //       arabicName: "مواد للبناء",
  //       description: "Discover more",
  //       arabicDescription: "مواد للبناء",
  //       route: "/pages/landing-pages/products-list",
  //       component: <ProductsList />,
  //     },
  //     {
  //       name: "Restoration, consolidation and reinforcement Mortars",
  //       arabicName: "مواد للبناء",
  //       description: "Discover more",
  //       arabicDescription: "مواد للبناء",
  //       route: "/pages/landing-pages/products-list",
  //       component: <ProductsList />,
  //     },
  //   ],
  // },
  {
    name: "Products",
    arabicName: "منتجات",
    route: "/pages/landing-pages/products-list",
    component: <ProductsList />,
  },
  {
    name: "About us",
    arabicName: "عن صروح",
    route: "/pages/landing-pages/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact us",
    arabicName: "اتصل بنا",
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
  },
];

export default routes;
