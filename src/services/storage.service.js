

var gameData = 
{
    a:2,
    b:"2",
    c:null
}

export function saveFile() {

    console.log('Salva')
    localStorage.setItem('saveFile', JSON.stringify('file'));
}

export function  loadFile  () {
    var file = JSON.parse(localStorage.getItem('saveFile'));

    console.log('file: ', file)
}

export function test() {
    console.log('Funziona');
    let newGameData = 
    {
        a:0,
        b:'asd',
        c:{test:'test'}
    }
        localStorage.setItem('gameData', JSON.stringify(newGameData));
}

export function initGamesValue(){

    localStorage.setItem('gameData', JSON.stringify(gameData));
}

export function getValueFromKey(){

}
export function saveDataFromKey(){

}