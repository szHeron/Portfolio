const { Octokit } = require("@octokit/rest");

export default async function repos(req,res){
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
        const repos = {
            names: [notes.data.name, coin.data.name, nlw.data.name],
            descs: [notes.data.description, coin.data.description, nlw.data.description],
            links: [notes.data.html_url, coin.data.html_url, nlw.data.html_url],
        }

        res.status(200).json(repos);

    }catch(err){
        console.log(err);
        res.status(500).end();
    }
}