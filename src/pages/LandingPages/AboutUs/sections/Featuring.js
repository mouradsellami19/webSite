import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import { useState, useEffect } from "react";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images
import weber from "assets/images/logos/gray-logos/weber-saint-gobain.svg";

function Featuring() {
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
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }} justifyContent={"center"}>
          <Grid item xs={6} md={6} lg={6}>
            <MKBox component="img" src={weber} alt="weber" width="100%" opacity={0.7} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={50}
              suffix="+"
              color="gold"
              title={selectedLanguage === "english" ? "Products" : "المنتجات"}
              description={
                selectedLanguage === "english"
                  ? "Of “high-performing” level are led by a certified project manager"
                  : "من المستوى ”عالي الأداء“ بقيادة مدير مشروع معتمد"
              }
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={3400}
              separator=","
              suffix="+"
              color="gold"
              title={selectedLanguage === "english" ? "Hours" : "الساعات"}
              description={
                selectedLanguage === "english"
                  ? "That meets quality standards required by our clients"
                  : "يلبي معايير الجودة التي يطلبها عملاؤنا"
              }
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title={selectedLanguage === "english" ? "Support" : "الدعم والمساندة"}
              color="gold"
              description={
                selectedLanguage === "english"
                  ? "Get expert advice whenever you need it"
                  : "احصل على مشورة الخبراء كلما احتجت إليها"
              }
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
