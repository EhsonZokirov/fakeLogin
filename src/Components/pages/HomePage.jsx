import React, { useState } from "react";

import fozilov from "../img/Fozilov.jpg";
import Dilnaze from "../img/Dilnaze.jpg";
import ZANJABIL from "../img/ZANJABIL.JPG";
import Jonon from "../img/JONON.PNG";
import azizRahima from "../img/AZIZ & Rahima.PNG";
import zarka from "../img/ZARKA.PNG";
import favik from "../img/FAVIK.jpg";
import nasiba from "../img/Nasiba.JPG";
import selena from "../img/Selena.jpg";
import Yosamin from "../img/Yosamin Musoeva.jpg";
import rafael from "../img/Гулов.jpg";
import manucher55 from "../img/Манучер55.jpg";
import azik from "../img/azik.jpg";
import nek from "../img/nek.jpg";
import tara from "../img/tara.jpg";
import Cards from "../Cards";
import NazarievaJas from "../img/Nazarieva Jasmina.jpg";
import Bahora from "../img/Ruzieva Bahora.jpg";
import Mirvais from "../img/Mirvais.jpg";
import jseng from "../img/Jseng.jpg";
import Davood_khan from "../img/Dovood_khan.jpg";
import ManizhaUmedulla from "../img/ManizhaUmedulla.jpg";
import Said_Shukurov from "../img/SaidShukurov(SKAP).jpg";
import Beha_en from "../img/Beha_en.jpg";
import Umed_taj_one from "../img/UmedTajOne.jpg";
import shoira_pulatova from "../img/ShoiraPulatova.jpg";
import cherrryw from "../img/Madina (CHERRYw).jpg";
import Nasibajon_life from "../img/NasibaJon_life.jpg";

import { InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import WcIcon from "@mui/icons-material/Wc";
import Groups2Icon from "@mui/icons-material/Groups2";

function Blogers() {
  // array of objects
  let bloggers = [
    ///////////////////////////////////// FOZILOV
    {
      id: 1,
      name: "Foz1lov",
      img: fozilov,
      inst: "216k",
      youtube: "10k",
      tiktok: "291k",
      gender: "male",
      instanik: "foz1lov",
    },
    ///////////////////////////////////// Dilnaze
    {
      id: 2,
      name: "Dilnazei",
      img: Dilnaze,
      inst: "11k",
      youtube: "0k",
      tiktok: "5k",
      gender: "female",
    },
    ///////////////////////////////////// Zanjabil Bro
    {
      id: 3,
      name: "ZanjabilBro",
      img: ZANJABIL,
      inst: "262k",
      youtube: "160k",
      tiktok: "95.8k",
      gender: "male",
    },
    ///////////////////////////////////// Джонон
    {
      id: 4,
      name: "Jononisher",
      img: Jonon,
      inst: "265k",
      youtube: "57k",
      tiktok: "138.4k",
      gender: "female",
    },
    ///////////////////////////////////// Aziz Rahima
    {
      id: 5,
      name: "Aziz.Rahima",
      img: azizRahima,
      inst: "730k",
      youtube: "20k",
      tiktok: "450k",
      gender: "family",
      learning: "true",
    },
    ///////////////////////////////////// Aziz Rahima
    {
      id: 50,
      name: "_jseng",
      img: jseng,
      inst: "67k",
      youtube: "0",
      tiktok: "50k",
      gender: "family",
      learning: "true",
    },
    ///////////////////////////////////// Zarka
    {
      id: 6,
      name: "_Zarkaa_",
      img: zarka,
      inst: "255k",
      youtube: "0k",
      tiktok: "53.4k",
      gender: "female",
    },
    ///////////////////////////////////// Favik
    {
      id: 7,
      name: "m_favik.tj",
      img: favik,
      inst: "315k",
      youtube: "0k",
      tiktok: "165k",
      gender: "male",
    },
    ///////////////////////////////////// Малоҳат
    {
      id: 8,
      name: "Mallydav",
      img: selena,
      inst: "185k",
      youtube: "0k",
      tiktok: "7k",
      gender: "female",
    },
    ///////////////////////////////////// Manucher 55
    {
      id: 9,
      name: "Manucher.55",
      img: manucher55,
      inst: "27k",
      youtube: "6k",
      tiktok: "14k",
      gender: "male",
    },
    ///////////////////////////////////// Nasiba 1178
    {
      id: 10,
      name: "Nasiba1178",
      img: nasiba,
      inst: "11.2k",
      youtube: "0k",
      tiktok: "5k",
      gender: "female",
    },
    ///////////////////////////////////// РАФАЕЛ ГУЛОВ
    {
      id: 11,
      name: "RafaelGulov",
      img: rafael,
      inst: "250k",
      youtube: "113k",
      tiktok: "2.5k",
      gender: "male",
    },
    ///////////////////////////////////// Ёсаминбону
    {
      id: 12,
      name: "Yosamin_Musoeva",
      img: Yosamin,
      inst: "35.5k",
      youtube: "0",
      tiktok: "0",
      gender: "female",
    },
    ///////////////////////////////////// Nek
    {
      id: 13,
      name: "Nek.xxl",
      img: nek,
      inst: "800k",
      youtube: "60k",
      tiktok: "620k",
      gender: "male",
    },
    ///////////////////////////////////// Тара
    {
      id: 14,
      name: "TaraDinova",
      img: tara,
      inst: "500k",
      youtube: "0",
      tiktok: "200k",
      gender: "female",
    },
    ///////////////////////////////////// AZIK vine
    {
      id: 15,
      name: "Azikvine",
      img: azik,
      inst: "247k",
      youtube: "0",
      tiktok: "350k",
      gender: "male",
    },
    ///////////////////////////////////// Баҳора
    {
      id: 16,
      name: "Ruzieva.1",
      img: Bahora,
      inst: "332k",
      youtube: "0",
      tiktok: "1,3m",
      gender: "female",
    },
    ///////////////////////////////////// Мирвайс
    {
      id: 17,
      name: "exlaise_mv",
      img: Mirvais,
      inst: "105k",
      youtube: "3k",
      tiktok: "20k",
      gender: "male",
    },
    ///////////////////////////////////// Jasmina
    {
      id: 18,
      name: "Nazar1eva",
      img: NazarievaJas,
      inst: "5.2k",
      youtube: "0",
      tiktok: "5k",
      gender: "female",
    },
    ///////////////////////////////////// Umed taj one
    {
      id: 19,
      name: "Umed_tajone",
      img: Umed_taj_one,
      inst: "242k",
      youtube: "0",
      tiktok: "0k",
      gender: "male",
    },
    ///////////////////////////////////// Manizha
    {
      id: 20,
      name: "manizhaumedullaa",
      img: ManizhaUmedulla,
      inst: "127k",
      youtube: "0",
      tiktok: "10k",
      gender: "female",
    },
    ///////////////////////////////////// Said Shukurov (mr. SKAP)
    {
      id: 21,
      name: "_Said_Shukurov_",
      img: Said_Shukurov,
      inst: "327k",
      youtube: "0",
      tiktok: "0",
      gender: "male",
    },
    ///////////////////////////////////// Shoira Pulatova
    {
      id: 22,
      name: "showshotime",
      img: shoira_pulatova,
      inst: "186k",
      youtube: "0",
      tiktok: "0",
      gender: "female",
    },
    ///////////////////////////////////// Beha_En
    {
      id: 23,
      name: "Beha_en",
      img: Beha_en,
      inst: "107k",
      youtube: "0",
      tiktok: "5k",
      gender: "male",
      learning: "true",
    },
    ///////////////////////////////////// CHerryw Madina
    {
      id: 24,
      name: "cherrryw",
      img: cherrryw,
      inst: "169k",
      youtube: "0",
      tiktok: "10k",
      gender: "female",
    },
    ///////////////////////////////////// Dowood khan
    {
      id: 25,
      name: "Dovood_khan",
      img: Davood_khan,
      inst: "165k",
      youtube: "0",
      tiktok: "15k",
      gender: "male",
    },
    ///////////////////////////////////// Nasibajon_life
    {
      id: 25,
      name: "Nasibajon_life",
      img: Nasibajon_life,
      inst: "22k",
      youtube: "0",
      tiktok: "5k",
      gender: "female",
    },
  ];
  // FILTER state
  const [card, setCard] = useState([]);
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(card);
  const [filtered, setFiltered] = useState(bloggers);
  function todoFilter(gender) {
    if (gender === "all") {
      setFiltered(bloggers);
    } else {
      let newCard = [...bloggers].filter((item) => item.gender === gender);
      setFiltered(newCard);
    }
  }
  function statusTodo(id) {
    let newCard = [...bloggers].filter((item) => {
      if (item.id === id) {
        item.gender = !item.gender;
      }
      return item;
    });
    setCard(newCard);
  }
  // search input state
  const [search, setSearch] = useState("");
  return (
    <div>
      {/* blogger cards  */}
      <section className=" py-20 lg:container m-auto">
        <h1 className="text-center font-bold text-4xl mb-10"> БЛОГЕРЫ </h1>
        {/* SEARCH DIV */}
        <div className="flex items-center gap-5 justify-center">
          <div className="flex justify-center py-10 items-center">
            <TextField
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              variant="standard"
              size="small"
              color="error"
              label="Поиск"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Фильтер</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                size="small"
                variant="standard"
                onChange={handleChange}
              >
                <MenuItem onClick={() => todoFilter("all")} value={0}>
                  <Groups2Icon /> ВСЕ БЛОГЕРЫ
                </MenuItem>
                <MenuItem onClick={() => todoFilter("male")} value={10}>
                  <MaleIcon color="primary" /> Мужчины
                </MenuItem>
                <MenuItem onClick={() => todoFilter("female")} value={20}>
                  <FemaleIcon color="error" /> Женщины
                </MenuItem>
                <MenuItem onClick={() => todoFilter("family")} value={30}>
                  <WcIcon color="success" /> Семейные
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="grid xs:grid-cols-2 lg:grid-cols-3 m-auto text-center font-medium md:w-[75%] px-5 gap-5 transition-all">
          {filtered
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
              return 0;
            })
            .map((e) => {
              return (
                <Cards
                  onClick={() => statusTodo(e.id)}
                  name={e.name}
                  img={e.img}
                  inst={e.inst}
                  youtube={e.youtube}
                  tiktok={e.tiktok}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
}
export default Blogers;
