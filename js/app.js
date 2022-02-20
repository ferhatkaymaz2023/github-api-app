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
    document.addEventListener('DOMContentLoaded',loadAllSearched);
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
                    ui.addSearchedToUI(username);
                    Storage.addSearchedToStorage(username);
                    ui.showUser(data.user);   
                    ui.showRepo(data.repo);
                }
            })
    }


    ui.clearInputs();
    e.preventDefault();
}


function loadAllSearched()
{
    let users = Storage.getAllSearchedFromStorage();

    users.forEach(user => {
        lastUsers.innerHTML += `<li class="list-group-item">${user}</li>`;
    });

}