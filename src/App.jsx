import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const url = `https://63d0e533120b32bbe8eca000.mockapi.io/Todo`;
  const [card, setCard] = useState([]);
  const [text, setText] = useState("");
  const [password, setPassword] = useState(0);

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
      console.log(data)
    } catch (error) {}
  };
  let alertback = () => {
    return alert("Неверный пароль");
  };

  useEffect(() => {
    getFunction();
  });
  return (
    <div>
      <div className=" bg-gray-500 h-[100vh] p-2 space-x-5 text-center py-40">
        <h1 className="text-[30px] font-bold my-10">Вход на сайт</h1>
        <input
          className="px-5 py-2 rounded-md outline-none hover:bg-slate-200 "
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Логин"
        />
        <input
          className="px-5 py-2 rounded-md outline-none hover:bg-slate-200 "
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Пароль"
        />
        <button
          onClick={() => {
            postFunction();
            alertback();
          }}
          className="bg-gray-300 px-5 py-2 rounded-md active:bg-slate-400 hover:bg-slate-200 duration-75 "
        >
          войти
        </button>
        <p className="my-5 text-gray-400 animate-pulse ">
          Для входа на сайт вы можете вводит данные instagram, e-mail или
          facebook .
        </p>
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
