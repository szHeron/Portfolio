import { useState } from 'react';
import Image from 'next/image'
import styled from 'styled-components';
import chatImg from '../../public/chat.png';
import Copy from '../components/copy';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    aside{
        z-index: 2;
    }

    @media (max-width: 768px){
        aside{
            display: none;
        }
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: start;
    margin-bottom: 40px;
    z-index: 1;

    input{
        width: 30vw;
        margin: 10px;
        padding: 10px;
        border-radius: 7px;
        border: none;
        color: #fff;
        background-color: ${props=>props.theme.colors.primary};
    }

    input::placeholder{
        color: #fff;
    }

    textarea{
        height: 25vh;
        width: 30vw;
        resize: none;
        padding: 10px;
        border-radius: 7px;
        border: none;
        margin: 10px;
        color: #fff;
        background-color: ${props=>props.theme.colors.primary};
    }

    textarea::placeholder{
        color: #fff;
    }

    @media (max-width: 768px){
        input{
            width: 75vw;
        }
        textarea{
            width: 75vw;
        }
        button{
            width: 50vw;
        }
    }
`

const Button = styled.button`
    height: 7vh;
    width: 10vw;
    margin: 20px;
    border-radius: 7px;
    color: #fff;
    border: none; 
    background-color: ${props=>props.theme.colors.primary};
    cursor: pointer;
`

const Error = styled.span`
    font-size: 12px;
    color: red;
`


export default function Feedback(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [erros, setErros] = useState({});

    function validate(){
        let check = true;
        const validateEmail = /\S+@\S+\.\S+/;
        const inputName = document.getElementById("input-name");
        const inputEmail = document.getElementById("input-email");
        const inputMessage = document.getElementById("input-message");
        inputName.style.border = "none";
        inputEmail.style.border = "none";
        inputMessage.style.border = "none";
        
        setErros({});

        if(!email.trim()){
            check = false;
            setErros((erros)=>({...erros, email: "Campo email obrigatorio!"}));
            inputEmail.style.border = "1px solid #FF0000";
        }
        if(!validateEmail.test(email)){
            check = false;
            setErros((erros)=>({...erros, email: "Por favor, insira um email válido!"}));
            inputEmail.style.border = "1px solid #FF0000";
        }
        if(!name.trim()){
            check = false;
            setErros((erros)=>({...erros, name: "Campo nome obrigatorio!"}));
            inputName.style.border = "1px solid #FF0000";
        }
        if(!message.trim()){
            check = false;
            setErros((erros)=>({...erros, message: "Campo mensagem obrigatorio!"}));
            inputMessage.style.border = "1px solid #FF0000";
        }
        
        if(check){
            return true;
        }

        return false;
    }

    function handleSubmit(){
        if(validate()){
            fetch('http://localhost:3000/api/sendMail',{
                method:'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });
            document.getElementById('response').innerHTML = "Enviado com sucesso!";
        }
    }

    return(
        <Content>
            <h1>Feedback</h1>
            <Form onSubmit={(e)=>{e.preventDefault();handleSubmit();}}>
                <input name="input" id="input-name" placeholder="Nome" type="text" onChange={(e)=>{setName(e.target.value)}}></input>
                {erros.name && <Error>{erros.name}</Error>}
                <input name="input" id="input-email" placeholder="Email" type="text" onChange={(e)=>{setEmail(e.target.value)}}></input>
                {erros.email && <Error>{erros.email}</Error>}
                <textarea name="input" id="input-message" placeholder="Mensagem" maxLength="512" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                {erros.message && <Error>{erros.message}</Error>}
                <Button type="submit">
                    ENVIAR
                </Button>
                <span style={{color: '#00a000'}} id="response"/>
            </Form>
            <aside style={{position: 'absolute', right:20, bottom: 40}}>
                <Image src={chatImg} alt="Ilustração chat" width={411} height={500}></Image>
            </aside>
            <Copy/>
        </Content>
    );
};