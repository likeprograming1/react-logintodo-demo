import styled from "styled-components";
import white from "../images/white.png";
import blackk from "../images/black.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useNavigate} from "react-router"
const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`
const MainSection = styled.section`
  position: relative;
  margin-top: 3%;
  width: 500px;
  height: 600px;
  border-radius: 20px;
  border: solid 1px ${(props) => {
    if(props.toggle) return "#f4f4f4";
    else return "#565656";
  }};
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Img = styled.img`
  margin-top: 10%;
`
const SectionLogin = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .pw {
    margin-top: 20px;
    margin-right: 44%;
  }
  .loginform {
    cursor: pointer;
    margin-top: 5px;
    width: 97%;
    display: flex;
    justify-content:space-around;
    text-decoration: none;
  }
`
const Label = styled.label`
  margin-right: 51.5%;
  margin-bottom: 5px;
  color: ${(props) => {
    if(props.toggle) return "#f4f4f4";
    else return "#565656";
  }};
  font-size: 20px;
  font-weight: 700;
`
const Input = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
`
const LoginButton = styled.button`
  outline: none;
  color: ${(props) => {
    if(props.toggle) return "#333";
    else return "#f4f4f4";
  }};
  background-color: ${(props) => {
    if(props.toggle) return "#f4f4f4";
    else return "#333";
  }};
  width: 150px;
  height: 40px;
  border-radius: 20px;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  :hover{
    color: ${(props) => {
    if(props.toggle) return "#f4f4f4";
    else return "#333";
  }};
  background-color: ${(props) => {
    if(props.toggle) return "#333";
    else return "#f4f4f4";
  }};
  }
`
const Formspan = styled.div`
  font-size: 12px;
  color: ${(props) => {
    if(props.toggle) return "#f4f4f4";
    else return "#565656";
  }};
  :hover{
    color: ${(props) => {
      if(props.toggle) return "#333";
      else return "#e1e1e1";
    }}
  }
`
const Main = ({toggle, setLogin, data, adres, setAdres, setUsername}) => {
  
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const navigation = useNavigate();
  const handleId = (e) => {
    setId(e.target.value);
  }
  const handlePw = (e) => {
    setPw(e.target.value);
  }
  const handlelogin = (id, pw) => {
    
      data && data.map(data=>{
        if(data.userId === id && data.password === pw) {
          // console.log(data.id);s
          setAdres(data.id-1);
          setUsername(data.name);
          setLogin(true);
          navigation('/Todomain');
        }
        
      })
      if(adres){
        // fetch("http://localhost:3000/data"+ adres,{
        //     method:"POST",
        //     body: JSON.stringify({
        //       userId: id,
        //       password: pw,
        //     })
        //   })
        //   .then((res) => {res.json()})
        //   .then((result) =>{
        //     console.log(result);
        //     setLogin(true);
        //     navigation('/Todomain');
        //     // window.location.href = "http://localhost:3001/Todomain";
        //   })
      }else {
        console.log('아이디나 비밀번호를 확인해주세요');
      }
      // console.log(adres);
  }
  return (
    <MainContainer>
      <MainSection toggle={toggle}>
        <Section><Img src={toggle ? white : blackk}></Img></Section>
        <SectionLogin>
          <Label toggle={toggle} htmlfor="id">아이디</Label>
          <Input placeholder="이메일을 입력해주세요." id="id" value={id||''} onChange={(e)=>handleId(e)}></Input>
          <Label toggle={toggle} className="pw" htmlfor="password">Password</Label>
          <Input placeholder="비밀번호를 입력해주세요." type="password" id="password" value={pw||''} onChange={(e)=>handlePw(e)}></Input>
          <div className="loginform">
            <Link to="/signup" style={{textDecoration: 'none'}}><Formspan className="loginOne" toggle={toggle}>회원가입</Formspan></Link>
            <Formspan className="loginTwo" toggle={toggle}>아이디/비밀번호 찾기</Formspan>
          </div>
            <LoginButton toggle={toggle} onClick={()=>handlelogin(id,pw)}>Login</LoginButton>
        </SectionLogin>
      </MainSection>
    </MainContainer>
  )
}

export default Main;