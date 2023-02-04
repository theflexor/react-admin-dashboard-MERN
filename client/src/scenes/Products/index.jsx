import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Header } from "components";
import React, { useState } from "react";
import { useGetProductsQuery } from "state/api";


export const Products = () => {
  const isNonMobile900 = useMediaQuery("(min-width: 900px)");
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const { data, isLoading } = useGetProductsQuery();
  console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns={
            isNonMobile900
              ? "repeat(4, minmax(0,1fr))"
              : "repeat(2, minmax(0,1fr))"
          }
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": {
              gridColumn: isNonMobile ? undefined : "span 4",
            },
          }}
        >
          {data.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </Box>
      ) : (
        <Box>Loading....</Box>
      )}
    </Box>
  );
};

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} />
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => setIsExpanded(!isExpanded)} variant="primary">
          See more
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{ color: theme.palette.neutral[300] }}
      >
        <CardContent>
          <Typography>id:{_id}</Typography>
          <Typography>Supply Left:{supply}</Typography>
          <Typography>
            Yearly Sales this Year:{stat[0].yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year::{stat[0].yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
