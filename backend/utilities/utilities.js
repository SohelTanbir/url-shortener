const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let randomCharecters ='';
const generateRandomCharecter = (charecterLength) =>{
    randomCharecters = '';
    for(let i=0; i<charecterLength; i++) {
        randomCharecters  +=  characters.charAt(Math.floor(Math.random() * 52))
    }
    return randomCharecters;
}

module.exports = generateRandomCharecter;

