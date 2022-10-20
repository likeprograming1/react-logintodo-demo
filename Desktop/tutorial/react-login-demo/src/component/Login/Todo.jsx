import { useState } from "react";
import styled from "styled-components";
import Header from "./Header"

const BODY = styled.main`
  background-color: #565656;
  height: 100vh;
`
const TodoMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .box{
    position: relative;
    width: 800px;
    height: 500px;
    border: solid 1px white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    h2{
      color: #f4f4f4;
      position: absolute;
    }
    .inputcontainr{
      margin-top: 70px;
      display: flex;
      
    }
    #Todo {
    border-radius: 30px;
    width: 300px;
    height: 10px;
    padding : 10px;
    border: none;
    outline: none;
   }
   .plus {
    height: 30px;
    width: 30px;
    margin-left: 5px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    :hover{
      background-color: #5656;
      color: #f4f4f4;
    }
   }
   .todobox {
    position: absolute;
    margin-top: 120px;
    > h1 {
      color: #f4f4f4;
    }
   }
  }
  
`
export const Todo = ({login, adres, data}) => {
  const [title, setTitle] = useState(null);
  const [checked, setChecked] = useState(false);
  console.log(data);
  console.log(adres);
  console.log(data[adres].todo[0].title);
  const handleTitle = (e) =>{
    setTitle(e.target.value);
  }
  const handleIn = () => {
    fetch(`http://localhost:3000/data/${adres+1}`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.parse({
        todo: JSON.parse({title, checked})
      })
    })
    .then((res) => res.json())
    .then(()=>{
      window.location.reload();
    })
  }
  return (
    <BODY>
      <Header login={login}></Header>
      <TodoMain>
        <div className="box">
          <h2>오늘의 할 일</h2>
          <div className="inputcontainr">
            <input id="Todo" placeholder="오늘 할 일을 적어주세요." value={title||''} onChange={(e)=>handleTitle(e)}></input>
            <button className="plus" onClick={()=> handleIn()}>+</button>
          </div>
          <div className="todobox">
                {console.log(data[adres].todo)}
                {data[adres].todo && data[adres].todo.map((todo) => (
                  <h1>{todo.title}</h1>
                ))}
          </div>
        </div>
      </TodoMain>
    </BODY>
  )
}