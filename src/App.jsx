import { useState } from 'react';
import './App.css'

function App() {

  const [query, setQuery] = useState("")
  
  fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free',{
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a36c4463camsh5d952167e71549ep171413jsn476d49e3f670',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
})

.then(res =>{
  console.log(res.json())
})
.catch (err=> {
	console.error(err);
});


  return (
    <div className='App'>

      <form>
        <input type="text" />
        <button type="submit">submit</button>
      </form>

    </div>
  )
}

export default App
