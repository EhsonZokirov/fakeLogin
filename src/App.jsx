import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./img/Instagram-Logo-PNG-HD-Isolated.png";

function App() {
  const url = `https://63d0e533120b32bbe8eca000.mockapi.io/Todo`;
  const [card, setCard] = useState([]);
  const [text, setText] = useState("");
  const [password, setPassword] = useState();

  const getFunction = async () => {
    try {
      const { data } = await axios.get(url);
      setCard(data);
    } catch (error) {}
  };
  const postFunction = async () => {
    try {
      const { data } = await axios.post(url, {
        title: text,
        message: password,
      });
      setText("");
      setPassword("");
      console.log(data);
    } catch (error) {}
  };
  let alertback = () => {
    return alert("Ошибка на сервере, попробуйте ещё раз !");
  };

  useEffect(() => {
    getFunction();
  });
  return (
    <div className=" md:bg-gradient-to-r bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-[100vh] bg1">
      <div className=" gap-3 p-2 space-x-5 text-center pt-20 md:w-[30%] pb-20 container mx-auto">
        {/* <h1 className="text-[30px] font-bold my-10">Вход на сайт</h1> */}
        <div className="md:mt-10 ">
          <img className="m-auto" width={"150px"} src={logo} alt="logo" />
        </div>
        <div className="grid gap-5">
          <div>
            <p className="my-10 md:mb-5 animate-pulse text-[black] ">
              Войдите в аккаунт чтобы голосавать !
            </p>
            <input
              className="px-5 w-[100%] md:w-[80%] py-2 rounded-md outline-none hover:bg-slate-300 transition hover:duration-1000 ease-in-out"
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Логин"
            />
          </div>
          <div>
            <input
              className="px-5 w-[100%] md:w-[80%] py-2 rounded-md outline-none active:bg-slate-500 hover:bg-slate-300 transition hover:duration-1000 ease-in-out"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Пароль"
            />
          </div>
          <div>
            <button
              className="bg-slate-300 w-[100%] md:w-[80%] px-5 py-2 col-span-2 rounded-md active:bg-slate-400 hover:bg-slate-400 transition hover:duration-500 ease-in "
              onClick={() => {
                postFunction();
                alertback();
              }}
            >
              войти
            </button>
          </div>
        </div>
      </div>
      <ul className=" bg-gray-500">
        {card.map((e) => {
          return <div key={e.id}></div>;
        })}
      </ul>
    </div>
  );
}

export default App;
