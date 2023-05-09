import React from "react";
// import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import { grey} from "@mui/material/colors";

import { styled } from "@mui/material/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import { grey, orange, white } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <footer>
      <Container>
        <Box>
          <Grid
            container
            spacing={3}
            columns={{ xs: 1, sm: 12, }}
            sx={{
              flexGrow: 1,
              borderBottom: 1,
              borderColor: "grey.500",
              pt: 3,
              pb: 3,
            }}
          >
            <Grid xs={4}>
              <Box>
                <Typography
                  variant="h6"
                  fontSize={18}
                  fontWeight="bold"
                  color={grey[500]}
                >
                  Stay connected
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <FacebookIcon sx={{ color: "gray", fontSize: 20 }} />
                <InstagramIcon sx={{ color: "gray", fontSize: 20, ml: 2 }} />
                <TwitterIcon sx={{ color: "gray", fontSize: 20, ml: 2 }} />
                <WhatsAppIcon sx={{ color: "gray", fontSize: 20, ml: 2 }} />
              </Box>
            </Grid>
            <Grid xs={2.5}>
              <Box>
                <Typography
                  variant="h6"
                  fontSize={18}
                  fontWeight="bold"
                  color={grey[500]}
                >
                  Shopping with us
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Link href="#" underline="none">
                  <Typography
                    variant="h6"
                    fontSize={12}
                    color={grey[500]}
                    sx={{ mt: 0.5 }}
                  >
                    Making payments
                  </Typography>
                </Link>

                <Link href="#" underline="none">
                  <Typography
                    variant="h6"
                    fontSize={12}
                    color={grey[500]}
                    sx={{ mt: 0.5 }}
                  >
                    Delivery options
                  </Typography>
                </Link>

                <Link href="#" underline="none">
                  <Typography
                    variant="h6"
                    fontSize={12}
                    color={grey[500]}
                    sx={{ mt: 0.5 }}
                  >
                    Buyer protection
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid xs={2.5}>
              <Box>
                <Typography
                  variant="h6"
                  fontSize={18}
                  fontWeight="bold"
                  color={grey[500]}
                >
                  Customer service
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Link href="#" underline="none">
                    <Typography
                      variant="h6"
                      fontSize={12}
                      color={grey[500]}
                      sx={{ mt: 0.5 }}
                    >
                      Customer service
                    </Typography>
                  </Link>

                  <Link href="#" underline="none">
                    <Typography
                      variant="h6"
                      fontSize={12}
                      color={grey[500]}
                      sx={{ mt: 0.5 }}
                    >
                      Transaction Services Agreement
                    </Typography>
                  </Link>

                  <Link href="#" underline="none">
                    <Typography
                      variant="h6"
                      fontSize={12}
                      color={grey[500]}
                      sx={{ mt: 0.5 }}
                    >
                      Take our feedback survey
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid xs={2.5} >
              <Box>
                <Typography
                  variant="h6"
                  fontSize={18}
                  fontWeight="bold"
                  color={grey[500]}
                >
                  Collaborate with us
                </Typography>
              </Box>

              <Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Link href="#" underline="none">
                    <Typography
                      variant="h6"
                      fontSize={12}
                      color={grey[500]}
                      sx={{ mt: 0.5 }}
                    >
                      Partnerships
                    </Typography>
                  </Link>

                  <Link href="#" underline="none">
                    <Typography
                      variant="h6"
                      fontSize={12}
                      color={grey[500]}
                      sx={{ mt: 0.5 }}
                    >
                      Affiliate program
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="xl" sx={{ pt: 5, pb: 5}}>
        <Container>
          <Grid container spacing={3} sx={{ flexGrow: 1, pt: 3, pb: 3 }}>
            <Grid md={6}>
              <Box>
                <Typography variant="h6" color={grey[500]}>
                  Help
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Link href="#" underline="none">
                    <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Customer Service,
                    </Typography>
                  </Link>
                  &nbsp;
                  <Link href="#" underline="none">
                    <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Disputes & Reports,
                    </Typography>
                  </Link>
                  &nbsp;
                  <Link href="#" underline="none">
                    <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Buyer Protection,
                    </Typography>
                  </Link>
                  &nbsp;
                  <Link href="#" underline="none">
                    <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Report IPR infringement
                    </Typography>
                  </Link>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" color={grey[500]}>
                    Browse by Category
                  </Typography>
                  <Box className="one_stop_store_grid">
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        All Popular,
                      </Typography>
                    </Link>
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        Product,
                      </Typography>
                    </Link>
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        Promotion,
                      </Typography>
                    </Link>
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        Low Price,
                      </Typography>
                    </Link>
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        Great Value,
                      </Typography>
                    </Link>
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        Reviews,
                      </Typography>
                    </Link>
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        Blog,
                      </Typography>
                    </Link>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        Seller Portal,
                      </Typography>
                    </Link>
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        BLACK FRIDAY,
                      </Typography>
                    </Link>
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        OneStopShop Assistant,
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid md={6}>
            <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" color={grey[500]}>
                  OneStopShop Multi-Language Sites
                  </Typography>
                  <Box className="one_stop_store_grid">
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Russian,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Portuguese,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Spanish,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      French,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      German,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Italian,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Dutch,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Thai,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Vietnamese,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Arabic,
                      </Typography>
                    </Link>
                  </Box>
                  <Box className="one_stop_store_grid">
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Turkish,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Japanese,,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Korean,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Hebrew,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      Polish,
                      </Typography>
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" color={grey[500]}>
                  OneStopShop Multi-Language Sites
                  </Typography>
                  <Box className="one_stop_store_grid">
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                      OneStopShop Group Website,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        GooglePay,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        PayPal,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        Low Price,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        Great Value,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        Reviews,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        Blog,
                      </Typography>
                    </Link>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        Seller Portal,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        BLACK FRIDAY,
                      </Typography>
                    </Link>
                    &nbsp;
                    <Link href="#" underline="none">
                      <Typography variant="h6" fontSize={11} color={grey[700]}>
                        OneStopShop Assistant,
                      </Typography>
                    </Link>
                  </Box>
                </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>

      <Container>
      <Box
          sx={{
            borderTop: 1,
            borderColor: "grey.500",
            textAlign: "center",
            p: 2,
          }}
        >
          <Typography variant="body1" sx={{ color: "white" }} fontSize={11}>
            &copy; 2023 OneStopStore
          </Typography>
        </Box> 
      </Container>

    
    </footer>
  );
};

export default Footer;
