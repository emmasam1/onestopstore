import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import apiRequest from "../../utils/apiRequest";

import Box from "@mui/material/Box";

const Usertbable = () => {
  const [users, setUsers] = useState([]);
  const [usersPerPage, setUserPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    apiRequest
      .get("users")
      .then((res) => {
        setUsers(res.data);
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const numOfTotalPages = Math.ceil(users.length / usersPerPage);
  const pages = [...Array(usersPerPage + 1).keys()].slice(1);

  const indexOfLastUSer = currentPage * usersPerPage;
  const indexOFirstUser = indexOfLastUSer - usersPerPage;

  const visibleUsers = users.slice(indexOFirstUser, indexOfLastUSer);

  const prevPageHandler = () =>{
    if(currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  const nextPageHandler = () =>{
    if(currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1)
  } 

  return (
    <Box>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>isVerified</th>
            <th>isSeller</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isVerified ? "true" : "false"}</td>
                <td>{user.isSeller ? "Yes" : "No"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Box sx={{mt: 3}}>
      <span onClick={prevPageHandler} className="pointer">Prev</span>
      <span>
        {pages.map((page) => (
          <NavLink key={page} onClick={()=> setCurrentPage(page)} 
            className={`${currentPage === page}` ? "Active" : " "}
          >
            {`| ${page} `}
          </NavLink>
        ))}
      </span>
      <span onClick={nextPageHandler} className="pointer">Next</span>
      </Box>
    </Box>
  );
};

export default Usertbable;
