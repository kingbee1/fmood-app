import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  //this state is for array that holds all the data.
  const [container, setContainer] = useState([]);

  fetch(
    `'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free'+${query}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a36c4463camsh5d952167e71549ep171413jsn476d49e3f670",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((dataStuff) => {
      setContainer(dataStuff.hints);
    })
    .catch((err) => {
      console.error({err});
    });

  //this function ensures when i change the initial empty state of query by typing something, it updates.
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <input type="text" value={query} onChange={onChangeHandler} />
        <button type="submit">submit</button>
      </form>

      {container.map((item) => {
        // console.log({item})
        return (
          <div key={item.foodId}>
            <img src={item.food.image} alt="" />
            <p>{item.food}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
