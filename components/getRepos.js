const { Octokit } = require("@octokit/rest");

export default async function GetRepos(){
    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN,
    });

    try{
        const notes = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'szHeron',
            repo: 'Notes'
        });

        const coin = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'szHeron',
            repo: 'CoinConvert'
        });

        const nlw = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'szHeron',
            repo: 'NLW6-Letmeask'
        });

        const portfolio = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'szHeron',
            repo: 'Portfolio'
        });

        const chatapp = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'szHeron',
            repo: 'ChatApp'
        });

        const todo = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'szHeron',
            repo: 'ToDo-Front'
        });


        const repos = {
            names: [notes.data.name, coin.data.name, nlw.data.name, portfolio.data.name, chatapp.data.name, todo.data.name],
            descs: [notes.data.description, coin.data.description, nlw.data.description, portfolio.data.description, chatapp.data.description, todo.data.description],
            links: [notes.data.html_url, coin.data.html_url, nlw.data.html_url, portfolio.data.html_url, chatapp.data.html_url, todo.data.html_url],
        }

        return repos;

    }catch(err){
        console.log(err);
        return 0;
    }
}