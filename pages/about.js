import styled from 'styled-components';
import Carousel from '../components/carouselSkills';
import Copy from '../components/copy';

const Content = styled.div`
    text-align: center;
    p{
        text-align: start;
        margin: 20px;
    }
`

export default function About(){
    return(
        <>
            <Content>
                <h1>Sobre mim</h1>
                <p> &nbsp;Olá meu nome é Heron e tenho 19 anos, comecei a minha jornada em 2016 - 2017, desenvolvendo em equipe um servidor para o jogo Minecraft, 
                    com isso ganhei interesse na área de desenvolvimento e em 2020 ingressei no curso de Engenharia de Software na 
                    Universidade Federal do Ceará, e acabei me interessando mais ainda nessa área, atualmente estou na metade do curso e aprendendo 
                    React Native, ReactJs(NextJS) e NodeJs(Express e MongoDB), como conteúdo externo ao curso, mas além disso, procuro me desenvolver como profissional, 
                    então com certeza a empresa que me escolher como profissional irá se desenvolver junto comigo, assim alcançando nossas metas.
                </p>
                <h2>Habilidades</h2>
                <Carousel/>
                <Copy style={{left: '25%', right: '75%'}}/>
            </Content>
        </>
    );
};