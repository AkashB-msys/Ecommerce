import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerTitle,
  BannerImage,
  BannerShopButton,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src="/image/banner/Iphone.png" />

      <BannerContent>
        <Typography varient="h6"> Shop new launch mobile</Typography>

        <BannerTitle variant="h2"> iphone 14 </BannerTitle>
        <BannerDescription variant="subtitle">
          iphone 14. Big and bigger!
        </BannerDescription>
        <BannerShopButton
          style={{
            backgroundColor: "black",
            width: "8vw",
            height: "3vw",
            padding: "1%",
          }}
        >
          Shop Now
        </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
