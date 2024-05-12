import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
// import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import consulting from "assets/images/consulting.jpg";
import marketing from "assets/images/marketing.jpg";
import oil from "assets/images/oil.jpg";
import construction from "assets/images/construction.jpg";
import industrial from "assets/images/industrial.jpg";
import vision from "assets/images/vision.jpg";

function Information() {
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
    <MKBox component="section" my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          {/* vision */}
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="gold"
                // icon="touch_app"
                title={selectedLanguage === "english" ? "Our vision" : "رؤيتنا"}
                description={
                  selectedLanguage === "english"
                    ? "We offer rapid, high-quality solutions and innovative technologies, constantly seeking new ways to meet our clients' needs using the latest technology and adhering to safety and quality standards"
                    : "نحن نقدم حلول سريعة وتقنيات فريدة ذات جودة عالية. نسعى باستمرار للبحث والتطوير وإيجاد طرق جديدة تمكننا من تلبية جميع احتياجات عملائنا بناءً على المعايير المحلية والعالمية باستخدام أحدث التقنيات والتطبيقات دون التأثير على معايير السلامة والجودة"
                }
              />
              <RotatingCardBack image={vision} color="light" />
            </RotatingCard>
          </Grid>
          {/* CONSULTING SERVICES  */}
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="gold"
                // icon="touch_app"
                title={selectedLanguage === "english" ? "Consulting services" : "خدمات استشارية"}
                description={
                  selectedLanguage === "english"
                    ? "Sorouh Chemicals Co. leverages extensive experience and top brand partnerships to offer comprehensive support services, guiding companies and contractors through all phases of crucial projects, especially infrastructure initiatives in Libya."
                    : "تستفيد شركة صروح للكيماويات من الخبرة الواسعة والشراكات مع أفضل العلامات التجارية لتقديم خدمات دعم شاملة، وتوجيه الشركات والمقاولين خلال جميع مراحل المشاريع الحيوية، وخاصة مبادرات البنية التحتية في ليبيا"
                }
              />
              <RotatingCardBack image={consulting} color="light" />
            </RotatingCard>
          </Grid>
          {/* MARKETING */}
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="gold"
                title={selectedLanguage === "english" ? "Marketing" : "تسويق"}
                description={
                  selectedLanguage === "english"
                    ? "Sorouh Chemicals Co. prioritizes client satisfaction by promptly addressing market needs. We've set up a network of accredited distributors across key cities in Libya, including Tripoli, Benghazi, Misrata, Sirte, and Sebha. This strategic network enhances our competitiveness and enables us to deliver superior services to our clients."
                    : "تعطي شركة صروح للكيماويات الأولوية لرضا العملاء من خلال تلبية احتياجات السوق على الفور. لقد أنشأنا شبكة من الموزعين المعتمدين في المدن الرئيسية في ليبيا، بما في ذلك طرابلس وبنغازي ومصراتة وسرت وسبها. تعمل هذه الشبكة الإستراتيجية على تعزيز قدرتنا التنافسية وتمكننا من تقديم خدمات متميزة لعملائنا"
                }
              />
              <RotatingCardBack
                image={marketing}
                color="light"
                // title="Sorouh Chemicals Co."
                // description="Sorouh Chemicals Co. specializes in petrochemical, oil and gas, construction and most industries. We are also proud to work with the best global specialized companies to provide high quality professional solutions with integrated teams and consultants, engineers and technical staff."
              />
            </RotatingCard>
          </Grid>
          {/* Oil, Gas and Petrochemicals */}
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="gold"
                // icon="touch_app"
                title={
                  selectedLanguage === "english"
                    ? "Oil, Gas and Petrochemicals"
                    : "النفط والغاز والبتروكيماويات"
                }
                description={
                  selectedLanguage === "english"
                    ? "Sorouh plays a pivotal role in Libya's oil, gas, and petrochemical sector, offering top-tier products and technologies. We excel in anti-corrosion solutions, chemicals for drilling, additives for cementation and well maintenance, and industrial chemicals for gas processing. Our focus on quality makes us a leading company in this vital industry."
                    : "تلعب صروح دورًا محوريًا في قطاع النفط والغاز والبتروكيماويات في ليبيا، حيث تقدم منتجات وتقنيات عالية المستوى. نحن نتميز في حلول مقاومة التآكل، والمواد الكيميائية للحفر، والمواد المضافة للأسمنت وصيانة الآبار، والمواد الكيميائية الصناعية لمعالجة الغاز. تركيزنا على الجودة يجعلنا شركة رائدة في هذه الصناعة الحيوية"
                }
              />
              <RotatingCardBack image={oil} color="light" />
            </RotatingCard>
          </Grid>
          {/* Construction industrial*/}
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="gold"
                // icon="touch_app"
                title={selectedLanguage === "english" ? "Construction" : "البناء"}
                description={
                  selectedLanguage === "english"
                    ? "Sorouh is committed to understanding clients' needs and delivering innovative construction chemical solutions. Our diverse range includes concrete admixtures, insulation, repair solutions, industrial floorings, and sealing materials, reflecting our dedication to comprehensive and forward-thinking solutions in the construction industry."
                    : "تلتزم صروح بفهم احتياجات العملاء وتقديم حلول كيميائية مبتكرة للبناء. تشمل مجموعتنا المتنوعة الخلطات الخرسانية، والعزل، وحلول الإصلاح، والأرضيات الصناعية، ومواد الختم، مما يعكس التزامنا بالحلول الشاملة والمستقبلية في صناعة البناء والتشييد"
                }
              />
              <RotatingCardBack image={construction} color="light" />
            </RotatingCard>
          </Grid>
          {/* Industrial*/}
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="gold"
                // icon="touch_app"
                title={selectedLanguage === "english" ? "Industrial sector" : "القطاع الصناعي"}
                description={
                  selectedLanguage === "english"
                    ? "To contribute to development of the economic sector in the country and reduce its dependence on natural resources (oil and gas), we supply the most important material of this industrial sector including industrial lubricants and oils, industrial dyes, filling and adhesive material and industrial paints."
                    : "للمساهمة في تنمية القطاع الاقتصادي في الدولة وتقليل اعتماده على الموارد الطبيعية (النفط والغاز)، نقوم بتوريد أهم المواد لهذا القطاع الصناعي بما في ذلك مواد التشحيم والزيوت الصناعية والأصباغ الصناعية ومواد التعبئة واللصق والدهانات الصناعية"
                }
              />
              <RotatingCardBack image={industrial} color="light" />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
