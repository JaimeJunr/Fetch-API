$('document').ready(function(){
    const repo = $('#repositories');
    const followers = $('#followers');
    const following = $('#follow');
    const avatar = $('#avatar');
    const name = $('#name');
    const username = $('#username');
    const link = $('#link');

    const endpoint = "https://api.github.com/users/JaimeJunr"

    function fetch(){
        $.ajax(endpoint).done(function(resposta){
            const followersResp = resposta.followers;
            const followResp = resposta.following;
            const reposiResp = resposta.public_repos;
            const avatarsrc = {
                src: resposta.avatar_url
            }
            const nameResp = resposta.name;
            const usernameResp = resposta.login;
            const Href = {
                href: resposta.html_url
            }
            followers.html(followersResp);
            repo.html(reposiResp);
            following.html(followResp);
            avatar.attr(avatarsrc);
            name.html(nameResp);
            username.html(usernameResp);
            link.attr(Href);
        })
    }

    try {
        fetch()
    }
    catch({error, msg}){
        console.log(error, msg)
        alert("Ouve um Erro, tente mais tarde")
        console.log(msg)
    }
})