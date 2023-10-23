import React from "react";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <ul className="" data-aos="fade-up" data-aos-duration="500">
      <li className="m-auto hover:text-[#CC0909] hover:scale-[1.03] cursor-pointer  rounded-md bg-purple-100 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
        <h1>{props.name}</h1>
        <img
          className=" m-auto w-[100%] transition-all  "
          src={props.img}
          alt="IMG"
        />
        <Link to="/Login">
          <div className="p-2 flex justify-evenly">
            <Button color="secondary" >Проголосовать</Button>
          </div>
        </Link>
      </li>
    </ul>
  );
}

export default Cards;
