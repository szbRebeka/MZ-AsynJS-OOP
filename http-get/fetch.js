/*
api forrás: https://jsonplaceholder.typicode.com/users

- A `fetch.js` fájlban írj egy GET kérést a fent megadott API címre!
- használd lehetőleg a Fetch API-t!
- Használj hibakezelést:
    - Sikeres kérés esetén a visszakapott adatot irasd ki console-ra!
    - Hiba esetén írasd ki a dobott hibát!
 */


const API_URL = 'https://jsonplaceholder.typicode.com/users';

/*
fetch(API_URL).then((response) => {
   // console.log('resolve', response);
    //getting the data
    return response.json();

}).then(data => {
    console.log('resolved: ', data);
}).catch((error) => {
    console.log('rejected: ', error)
});
*/

//fetch with async

const getUsers = async () => {

    const response = await fetch(API_URL);

    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
}

getUsers()
    .then(data => console.log('resolved: ', data))
    .catch(error => console.log('rejected: ', error.message));
