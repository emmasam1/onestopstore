import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

export default function ImagePage({ product }) {
  // const [detailsPic, setDetailsPic] = useState(images);
  // const [img, setImg] = useState(detailsPic[0]);

  // const showImage = (img) => {

  //   setImg(img);
  // };

  return (
    <Box>
      <Grid>
        <CardMedia
          sx={{ width: "100%", height: 500, backgroundSize: "contain" }}
          image={product?.image.url}
        />
      </Grid>
    </Box>
  );
}

{
  /* <Box sx={{ width: "100%" }}>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {detailsPic &&
    detailsPic.map((img) => (
      <Grid
        xs={4}
        key={img.id}
        onClick={() => showImage(img)}
        sx={{ cursor: "pointer" }}
      >
        <CardMedia
          sx={{ width: "100%", height: 250 }}
          image={img.image}
          
        />
      </Grid>
    ))}
</Grid>
</Box> */
}
