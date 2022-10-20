import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  height: 80px;
`
const Logo = styled.div`
  width: 80px;
  height: 60px;
  color: #f4f4f4;
  font-size: 30px;
`
// const ToggleButton = styled.button`
//   position: relative;
//   display: flex;
//   align-items: center;
//   width: 100px;
//   height: 40px;
//   border-radius: 40px;
//   cursor: pointer;
//   background-color: ${(props)=>{
//     if(props.toggle) return "#f4f4f4";
//     else return "#565656";
//   }};
//   > .left-circle{
//     width: 30px;
//     height: 30px;
//     background-color: #565656;
//     border-radius: 50%;
//     transition: 1s ease;
//   }
//   > .right-circle{
//     position: absolute;
//     right: 5%;
//     width: 30px;
//     height: 30px;
//     background-color: #f4f4f4;
//     border-radius: 50%;
//     transition: 1s ease;
//   }
// `
const Section = styled.form`
  display: flex;
  > .log {
    width: 100px;
    height: 40px;
    outline: none;
    letter-spacing: 5px;
    color: ${(props) => {
      if(props.toggle) return "#565656";
      else return "#f4f4f4";
    }};
    background-color: ${(props) => {
      if(props.toggle) return "#f4f4f4";
      else return "#565656";
    }};
    font-size: 16px;
    font-weight: 700;
    border: none;
    text-decoration: none;
  }
`

const Header = ({toggle, togglehandler, login, setLogin}) =>{
  const navigation = useNavigate();
  const handleLogout = ()=>{
    setLogin(false);
    navigation('/');
  }
  const handleLogo = () => {
    navigation('/');
  }
  const handleLogoin = () => {
    window.location.reload();
  }
  return (
    <HeaderContainer>
      {/* {console.log(toggle)}
      {console.log(login)} */}
      {login ?
      <Logo toggle={toggle} onClick={()=> handleLogoin()}>Todo</Logo>
      :
      <Logo toggle={toggle} onClick={()=> handleLogo()}>Todo</Logo>
      }
      <Section>
        {login ? 
        // <button className="log" type="submit" toggle={toggle}>로그아웃</button>
        <Link className="log" to="/" onClick={()=> handleLogout()}>로그아웃</Link>
        : 
        null}
      </Section>
      {/* <ToggleButton 
          onClick={togglehandler}
          toggle={toggle} 
          >
          <div className={toggle ? "left-circle": "right-circle"}>
          </div>
        </ToggleButton> */}
    </HeaderContainer>
  )
}

export default Header;