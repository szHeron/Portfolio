import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Line = styled.a`
    text-decoration: none;
    padding: 10px;
    display: inline-block;
    position: relative;

    :after {
        content: '';
        position: absolute;
        border-bottom: solid 1px #fff;
        @media (max-width: 768px) {
            border-bottom: solid 1px ${props=>props.theme.colors.text};
        }
        bottom: 0;
        left: 0;
        right: ${props=>props.query?"0":"100%"};
        transition: ${props=>props.query?"":"all 500ms"};
    }
    :hover:after {
        right: 0;
    }
`

export default function Nav(){
    const router = useRouter();

    return (
        <>
            <div>
                <Link passHref href="/">
                    <Line query={router.asPath == "/"}>Home</Line>
                </Link>
            </div>
            <div>
                <Link passHref href="/projects">
                    <Line query={router.asPath =="/projects"}>Projetos</Line>
                </Link>
            </div>
            <div>
                <Link passHref href="/about">
                    <Line query={router.asPath == "/about"}>Sobre mim</Line>
                </Link>
            </div>
            <div>
                <Link passHref href="/feedback">
                    <Line query={router.asPath =="/feedback"}>Feedback</Line>
                </Link>
            </div>
        </>
    )
}
