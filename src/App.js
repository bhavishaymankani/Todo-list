import './App.css';
import {Header} from './components/Header'
import {Main} from './components/Main'
import {About} from './components/About'
import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Edit } from './components/Edit';


function App() {
  let initTodo;

  const key = "todos"

  const storage = localStorage.getItem(key)

  if (storage === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(storage)
  }

  const onDelete = (todo) => {
    
    setTodos(todos.filter(val => val !== todo))
  }

  const createTodo = (todo) => {
    if (todos.length !== 0) { 
      todo.id = todos[todos.length - 1].id + 1
    } else {
      todo.id = 1
    }

    setTodos([...todos, todo])
  }

  const updateTodo = (todo) => {
    setTodos(todos.map(t => {
      if (t.id === todo.id) {
        t = todo
      }
      return t
    }))
  }

  

  const [addComponent, setAddComponent] = useState(false)

  const addTodo = (bool) => {
    setAddComponent(bool)
  }

  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <Router>
        <header>
          <Header appName = "Todo List"/>
        </header>

        <div className="App">
        <Routes>
          <Route path="/" element = {
            <main className="container col-lg-8 col-xs-12">
              <Main 
                todos={todos} 
                onDelete={onDelete}
                createTodo = {createTodo}
                updateTodo = {updateTodo}
                component={addComponent} 
                addTodo = {addTodo}
              />
            </main>
          }/>
            
          
          <Route path="/about" element = {<About />}/>
          <Route path="/edit" element = {<Edit updateTodo = {updateTodo} />}/>

        </Routes>
          

        </div>
        <footer>

        </footer>
      </Router>
    </div>
  );
}

export default App;
