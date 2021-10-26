import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80vw;
    height: 22vh;
    padding: 10px;
    padding-left: 35px;
    padding-right: 35px;
    padding-bottom: 175px;
    border-radius: 20px;
    background-color: ${props=>props.theme.colors.tertiary};
    color: #fff;
    z-index: 1;
    margin-bottom: 25px;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    section{
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        justify-content: flex-start;
        width: 100%;
    }

    h2{
        margin-bottom: 0px;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 12vw;
        height: 7vh;
        border: none;
        border-radius: 7px;
        background-color: ${props=>props.theme.colors.primary};
        color: #fff;
        font-size: 1em;

        @media (max-width: 768px){
            width: 40vw;
        }

        svg{
            margin-left: 10px;
        }
    }

    @media (max-width: 768px){
        padding-top: 0px;
        padding: 15px;
        height: 45vh;
        width: 92vw;
        justify-content: space-between;

        div{
            flex-direction: column;
            justify-content: center;
        }

        section{
            flex-wrap: wrap;

            :-webkit-scrollbar {
                width: 5px;
            }

            :-webkit-scrollbar-track {
                background: transparent;
            }

            :-webkit-scrollbar-thumb {
                background-color: #363636;
                border-radius: 20px;
                border: 0;
            }
        }
    }

    @media (max-width: 392px){
        padding-bottom: 6px;
        height: 50vh;
    }
`

const Topic = styled.p`
    color: ${props=>props.theme.colors.primary};
    border: 1px solid ${props=>props.theme.colors.primary};
    padding: 3px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    margin-right: 20px;

    @media (max-width: 768px){
        margin-bottom: 0px;
    }
`

export default function Project(props){
    return(
        <Content>
            <h2>{props.title}</h2>
            <div>
                <p>{props.desc}</p>
                <a href={props.link} target="_blank" rel="noreferrer">GITHUB<FontAwesomeIcon icon={["fas", "external-link-alt"]} size={'1x'}/></a>
            </div>
            <section style={{justifyContent: 'flex-start'}}>
                {props.topics.map((elemento, key)=>{
                    return <Topic key={key}>{elemento}</Topic>
                })}
            </section>
        </Content>
    )
}