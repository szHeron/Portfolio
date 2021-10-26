import { useState } from 'react';
import styled from 'styled-components';
import GetRepos from '../components/getRepos';
import Copy from '../components/copy';
import Project from '../components/project';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export async function getStaticProps() {
    const repositories = await GetRepos();
    return {
        props: {repositories},
    }
}

export default function Projects({repositories}){
    const [repos,setRepos] = useState({...repositories, topics:
        [['ReactNative', 'Expo', 'Async-storage','Navigation'],
        ['ReactNative', 'Expo', 'Axios'],
        ['ReactJs', 'TypeScript', 'SCSS', 'Firebase'],
        ['NextJs','Styled-components','Production - Vercel'],
        ['ReactJs', 'TypeScript','Styled-components','Production - Vercel'],
        ['ReactJs', 'MongoDB', 'NodeJs', 'ExpressJs']]
    });
    return(
        <Content>
            <h1>Projetos</h1>
            <Project title={repos.names[0]} desc={repos.descs[0]} link={repos.links[0]} topics={repos.topics[0]}/>
            <Project title={repos.names[1]} desc={repos.descs[1]} link={repos.links[1]} topics={repos.topics[1]}/>
            <Project title={repos.names[2]} desc={repos.descs[2]} link={repos.links[2]} topics={repos.topics[2]}/>
            <Project title={repos.names[3]} desc={repos.descs[3]} link={repos.links[3]} topics={repos.topics[3]}/>
            <Project title={repos.names[4]} desc={repos.descs[4]} link={repos.links[4]} topics={repos.topics[4]}/>
            <Project title={repos.names[5]} desc={repos.descs[5]} link={repos.links[5]} topics={repos.topics[5]}/>
            <Copy style={{marginTop: '25px',position: 'relative'}}/>
        </Content>
    )
};