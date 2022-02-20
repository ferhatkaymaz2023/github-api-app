    class Storage
    {
        constructor()
        {

        }

        static getAllSearchedFromStorage()
        {
            let users;
            if(localStorage.getItem('searched') === null)
            {
                users = [];
            }
            else 
            {
                users = JSON.parse(localStorage.getItem('searched'));
            }
            return users;
        }

        static addSearchedToStorage(username)
        {
            let users = this.getAllSearchedFromStorage();

            if(users.indexOf(username) === -1)
            {
                users.push(username);
            }

            localStorage.setItem('searched',JSON.stringify(users));
        }



    }