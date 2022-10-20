import styled from "styled-components";
import Header from "./Header";
import { Link } from "react-router-dom";
const MainBody = styled.main`
  width: 100%;
  height: 2000px;
  background-color: ${(props) => {
    if(props.toggle) return "#565656";
    else return "#f4f4f4";
  }};
  .link{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;
    text-decoration: none;
    color: #565656;
    cursor: pointer;
    font-size: 40px;
    font-weight: 700;
    border-radius: 20px;
    width: 150px;
    height: 60px;
    :hover {
      color: #f4f4f4;
      background-color: #565656;
    }
  }
`
const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  .main {
    color : #f4f4f4;
    font-size: 50px;
    font-weight: 700;
    margin-left: -20%;
    padding: 50px;
  }
  .main-bottom {
    margin-right: -20%;
    color : #f4f4f4;
    font-size: 50px;
    font-weight: 700;
    padding: 50px;
  }
`
const ButtonContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`
// const ButtonTodo = styled.button`
  
// `
const TodoMain = ({toggle, login, adres, togglehandler, username}) => {
  // adres는 데이터제이슨 위치
  // console.log(data);
  return (
    <MainBody toggle={toggle}>
      {/* {console.log(toggle)} */}
      <Header toggle={`${toggle}`} login={login} togglehandler={togglehandler}></Header>
      <MainContainer>
        <span className="main">{username}님 어서오세요.</span>
        <span className="main-bottom">Todo-List를 시작하겠습니다.</span>
      </MainContainer>
      <ButtonContainer>
        <Link className="link" to="/Todo">시 작</Link>
      </ButtonContainer>
    </MainBody> 
    
  )
}
export default TodoMain;