import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import notebookImg from '../public/notebook.png';
import Copy from '../components/copy';
import ButtonCV from '../components/buttonCV';

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 40px;
  
  @media (max-width: 768px){
    aside{
      display: none;
    }
  }
`;

const Main = styled.main`
  margin: 5px;
  z-index: 1;
  h1{
    font-size: 3em;
    span{
      color: ${props=>props.theme.colors.primary};
    }
  }
`;

export default function Home() {
  return (
    <Conteiner>
      <Content>
        <Main translate="no">
          <h1>Olá, meu nome é <span>{"\<Heron/>"}</span></h1>
          <Typewriter options={{
              strings: ["Estudante no curso de Engenharia de Software - UFC.", "Desenvolvendo projetos em ReactNative, ReactJs e NextJs.",
              "Entusiasta da programação ;)", "Fã de videogames 🎮."],
              autoStart: true,
              delay: 45,
              loop: true
            }}/>
            <ButtonCV/>
        </Main>
        <aside style={{zIndex: 1}}>
          <Image src={notebookImg} alt="Ilustração home" width={430} height={460}></Image>
        </aside>
      </Content>
      <Copy/>
    </Conteiner>
  )
}
