import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import apiRequest from "../../utils/apiRequest";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
  width: "100%",
}));

const Seller = () => {
  const [sellers, setSellers] = useState([]);
  const [usersPerPage, setUserPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    apiRequest
      .get("sellers")
      .then((res) => {
        setSellers(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const confirmSeller = async (e) => {
    try {
      const res = await apiRequest.get("sellers");
      // // const id = res.data.sellers;
      // const res = await apiRequest.patch("isSeller");
      // console.log(res);
      console.log(e)
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };

  const numOfTotalPages = Math.ceil(sellers.length / usersPerPage);
  const pages = [...Array(usersPerPage + 1).keys()].slice(1);

  const indexOfLastUSer = currentPage * usersPerPage;
  const indexOFirstUser = indexOfLastUSer - usersPerPage;

  const visibleUsers = sellers.slice(indexOFirstUser, indexOfLastUSer);

  const prevPageHandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPageHandler = () => {
    if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <Box>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Store Name</th>
            <th>isSeller</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sellers?.map((seller) => {
            return (
              <tr key={seller._id}>
                <td>{seller.name}</td>
                <td>{seller.sellers.address}</td>
                <td>{seller.sellers.phone}</td>
                <td>{seller.sellers.store_name}</td>
                <td>{seller.isSeller ? "Yes" : "No"}</td>
                <td>
                  {seller.isSeller ? (
                    "Confirmed"
                  ) : (
                    <ColorButton
                      variant="contained"
                      type="submit"
                      onClick={()=> confirmSeller(seller._id)}
                    >
                      confirm
                    </ColorButton>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Box sx={{ mt: 3 }}>
        <span onClick={prevPageHandler} className="pointer">
          Prev
        </span>
        <span>
          {pages.map((page) => (
            <NavLink
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${currentPage === page}` ? "Active" : " "}
            >
              {`| ${page} `}
            </NavLink>
          ))}
        </span>
        <span onClick={nextPageHandler} className="pointer">
          Next
        </span>
      </Box>
    </Box>
  );
};

export default Seller;
