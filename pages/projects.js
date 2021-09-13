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
    const data = await GetRepos();
    
    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data },
    }
}

export default function Projects({repositories}){
    const [repos,setRepos] = useState({...repositories, topics:
        [['ReactNative', 'Expo', 'Async-storage','Navigation'],
        ['ReactNative', 'Expo', 'Axios'],
        ['ReactJs', 'TypeScript', 'SCSS', 'Firebase']]
    });
    return(
        <Content>
            <h1>Projetos</h1>
            <Project title={repos.names[0]} desc={repos.descs[0]} link={repos.links[0]} topics={repos.topics[0]}/>
            <Project title={repos.names[1]} desc={repos.descs[1]} link={repos.links[1]} topics={repos.topics[1]}/>
            <Project title={repos.names[2]} desc={repos.descs[2]} link={repos.links[2]} topics={repos.topics[2]}/>
            <Copy style={{position: 'relative'}}/>
        </Content>
    )
};