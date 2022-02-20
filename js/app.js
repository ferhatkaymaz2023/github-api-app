const form  = document.getElementById('github-form');
const nameInput = document.getElementById('githubname');
const clearLastUsers = document.getElementById('clear-last-users');
const lastUsers = document.getElementById('last-users');

const github = new Github();
const ui = new UI();

addEventListeners();

function addEventListeners()
{
    form.addEventListener('submit',getData);
}

function getData(e)
{
    const username = nameInput.value.trim();

    if(username === '')
    {
        console.log('empty github user');
    }
    else 
    {
        github.getGithubData(username)
            .then(data => {
                if(data.user.message === 'Not Found')
                {
                    console.log('User not found');
                }
                else 
                {
                    ui.showUser(data.user);   
                }
            })
    }


    ui.clearInputs();
    e.preventDefault();
}