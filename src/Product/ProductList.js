import { Box, Grid } from "@chakra-ui/react";

import ItemCard from "../Shared/UI/ItemCard";
import { useGetShoes } from "../Shared/Hooks/useShoes";
import LoadingSpinner from "../Shared/UI/LoadingSpinner";

import Scrollbars from "rc-scrollbars";
import { useSearchParams } from "react-router-dom";

function ProductList() {
  const [searchParams] = useSearchParams();

  const queryObj = {};
  for (const [key, value] of searchParams.entries()) {
    queryObj[key] = value;
  }

  const { data, isLoading } = useGetShoes();
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Box as={Scrollbars}>
        <Grid
          columnGap='16px'
          rowGap='32px'
          gridTemplateColumns='repeat(auto-fit,minmax(320px,1fr))'
          // overflowY='scroll'
          py='16px'
        >
          {data.map((item) => {
            return <ItemCard data={item} key={item.id} cardW='300px' />;
          })}
        </Grid>
      </Box>
    </>
  );
}

export default ProductList;
