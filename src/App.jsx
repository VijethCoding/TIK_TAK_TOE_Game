
import styled from 'styled-components';
import './App.css'
import TikTakToe from './assets/components/TikTakToe'

function App() {

  return (
    <>
      <MainDiv>
        <TikTakToe />
      </MainDiv>
    </>
  )
}

export default App;


const MainDiv = styled.div`
  height: 100vh;

  background-color: #FBD0D7;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
