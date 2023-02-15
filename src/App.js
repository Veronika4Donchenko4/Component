import "./App.css";
import List from "./components/List";

function App() {
  const dataShow = ['Пройти курс react', 'Написать компонент ToDo', 'Сдать задание', 'Радоваться жизни']
  return (
<div className='app'>
  <h2>List</h2>
< List dataShow={dataShow}/>
</div>
)
}


export default App;
