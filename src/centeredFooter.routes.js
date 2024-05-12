import FacebookIcon from "@mui/icons-material/Facebook";

import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

export default {
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/sorouh.chimecals",
    },
  ],
  menus: [
    {
      name: "company",
      arabicTitle: "الصفحات",
      items: [
        { name: "Home", route: "layouts/pages/presentation" },
        { name: "about us", arabicName: "عن صروح", route: "/pages/landing-pages/about-us" },
        { name: "contact us", arabicName: "اتصل بنا", route: "/pages/landing-pages/contact-us" },
        { name: "products", arabicName: "منتجات", route: "/pages/landing-pages/products" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} crafted by Sorouh.
    </MKTypography>
  ),
};
