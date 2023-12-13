import { Stack } from "@mui/system";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useState } from "react";

export default function SingleProductDesktop({ product, matches }) {
  const [showOPtions, setShowOptions] = useState(false);
  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {showOPtions && (
          <ProductAddToCart show={showOPtions} variant="contained">
            Add to cart
          </ProductAddToCart>
        )}

        <ProductActionsWrapper show={showOPtions}>
          <Stack direction="column">
            <ProductActionButton>
              <ShareIcon color="secondary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="secondary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
    </>
  );
}
