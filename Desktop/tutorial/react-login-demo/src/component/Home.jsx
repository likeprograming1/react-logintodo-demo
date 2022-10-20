import styled from 'styled-components';
import Header from './Login/Header';
import Main from './Main';

const Body = styled.div`
  width: 100%;
  height: 2000px;
  background-color: ${(props)=>{
    if(props.toggle) return "#565656";
    else return "#f4f4f4";
  }};
`
const Home = ({toggle, togglehandler, data, login, setLogin, adres, setAdres, setUsername}) => {

  return (
    <Body toggle={toggle}>
      <Header toggle={toggle} togglehandler={togglehandler} login={login} setLogin={setLogin}></Header>
      <Main toggle={toggle} data={data} login={login} setLogin={setLogin} adres={adres} setAdres={setAdres} setUsername={setUsername}></Main>
    </Body>
  )
}

export default Home;