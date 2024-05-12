import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";

import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-sorouh-nbg.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Sorouh",
    image: logoCT,
    route: "/",
  },
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
        { name: "about us", arabicName: "عن صروح", route: "/pages/landing-pages/about-us" },
        { name: "contact us", arabicName: "اتصل بنا", route: "/pages/landing-pages/contact-us" },
        { name: "products", arabicName: "منتجات", route: "/pages/landing-pages/products-list" },
      ],
    },
    {
      name: "activities",
      arabicTitle: "المجالات",
      items: [
        {
          name: "Plasters Mortars Lime",
          arabicName: "طلاءات الملاط الجيري",
          route: "/pages/landing-pages/products-list",
        },
        {
          name: "Plaster Skim Coats Finishes For Rehabilitation",
          arabicName: "تشطيبات الجص المقشود لإعادة التأهيل",
          route: "/pages/landing-pages/products-list",
        },
        {
          name: "Underlays Glues Sealants",
          arabicName: "الركيزة التحتية للمواد اللاصقة",
          route: "/pages/landing-pages/products-list",
        },
        {
          name: "Waterproofing Solutions",
          arabicName: "حلول العزل المائي",
          route: "/pages/landing-pages/products-list",
        },
        {
          name: "Laying Tiles",
          arabicName: "وضع البلاط",
          route: "/pages/landing-pages/products-list",
        },
        {
          name: "Restoration, Consolidation And Reinforcement Mortars",
          arabicName: "ملاط لترميم الخرسانة وتوحيد وتعزيز الهياكل",
          route: "/pages/landing-pages/products-list",
        },
      ],
    },
    {
      name: "Sorouh Chemicals Co.",
      arabicTitle: "شركة صروح للكيماويات",
      items: [
        {
          icon: <LocationOnIcon />,
          name: "Abdullah Bin Masoud St., Bin Achour, Tripoli - Libya",
          arabicName: "شارع عبد الله بن مسعود، بن عاشور، طرابلس - ليبيا",
        },
        { icon: <PhoneIcon />, name: "Tel.: +218 217299145", arabicName: "+218 217299145" },
        { icon: <FaxIcon />, name: "F.: +218 213508663", arabicName: "+218 213508663" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} crafted by SOROUH .
    </MKTypography>
  ),
};
