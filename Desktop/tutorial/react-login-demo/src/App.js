import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import SignUp from './component/SignUp';
import useFetch from './hooks/useFetch';
import useToggle from "./hooks/useToggle";
import { useState } from 'react';
import TodoMain from './component/Login/TodoMain';
import { Todo } from './component/Login/Todo';

function App() {
  const [login, setLogin] = useState(false);
  const [adres, setAdres] = useState();
  const [toggle, togglehandler] = useToggle(true);
  const [username, setUsername] = useState('');
  const [data] = useFetch("http://localhost:3000/data");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home toggle={toggle} togglehandler={togglehandler} data={data} 
        login={login} setLogin={setLogin} adres={adres} setAdres={setAdres} setUsername={setUsername}/>}></Route>
        <Route path='/signup' element={<SignUp toggle={toggle} togglehandler={togglehandler}  data={data}/>}></Route>
        <Route path='/Todomain' element={<TodoMain toggle={toggle} login={login} adres={`${adres}`} 
        setAdres={setAdres} togglehandler={togglehandler} username={username}/>}> </Route>
        <Route path='/Todo' element={<Todo login={login} adres={adres} data={data}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
