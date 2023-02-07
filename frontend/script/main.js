


function fetchData() {

    let key = '37a15cab-b02a-4274-a344-68fc3f5cb899';
    let baseURL = 'https://content.guardianapis.com/search'
    let url = `${baseURL}?section=news&show-fields=headline,trailText,thumbnail&api-key=${key}`;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function (evt) {
        if (evt.target.readyState == 4 && evt.target.status == 200) {
            let data = JSON.parse(evt.target.response)

            var secondLeftTile = document.getElementsByClassName('second-middle')[0];
            createTile(data.response.results[0], secondLeftTile);
    
        }

    }


}

function fetchSportsData() {

    let key = '37a15cab-b02a-4274-a344-68fc3f5cb899';
    let baseURL = 'https://content.guardianapis.com/search'
    let url = `${baseURL}?section=sports&show-fields=headline,trailText,thumbnail&api-key=${key}`;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function (evt) {
        if (evt.target.readyState == 4 && evt.target.status == 200) {
            let data = JSON.parse(evt.target.response)
            console.log(data);
            createSPorts(data.response.results);
        }

    }
}

function fetchCulturesData() {

    let key = '37a15cab-b02a-4274-a344-68fc3f5cb899';
    let baseURL = 'https://content.guardianapis.com/search'
    let url = `${baseURL}?section=culture&show-fields=headline,trailText,thumbnail&api-key=${key}`;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function (evt) {
        if (evt.target.readyState == 4 && evt.target.status == 200) {
            let data = JSON.parse(evt.target.response)
            console.log(data);
            createCulture(data.response.results);
        }

    }
}

function fetchlifeAndStyleData() {

    let key = '37a15cab-b02a-4274-a344-68fc3f5cb899';
    let baseURL = 'https://content.guardianapis.com/search'
    let url = `${baseURL}?section=lifeandstyle&show-fields=headline,trailText,thumbnail&api-key=${key}`;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function (evt) {
        if (evt.target.readyState == 4 && evt.target.status == 200) {
            let data = JSON.parse(evt.target.response)
            console.log(data);
            createLifeStyle(data.response.results);
        }

    }
}

fetchSportsData();
fetchCulturesData();
fetchlifeAndStyleData();



 function createTile(data, secondLeftTile) {

//     //  var secondLeftTile = document.getElementsByClassName('second-middle')[0];

    var tileCon = document.createElement('div');
    tileCon.setAttribute('class', 'tile');
    secondLeftTile.prepend(tileCon);

    var fTop = document.createElement('div');
    fTop.setAttribute('class', 'tile-body');
    tileCon.appendChild(fTop);

    if (data.fields.thumbnail) {
        let img2 = document.createElement('img');
        img2.setAttribute('class', 'img2');
        img2.setAttribute('src', data.fields.thumbnail);
        img2.setAttribute('alt', 'News Image');
        fTop.appendChild(img2);
    } else {
        let noThumb = document.createElement('div');
        noThumb.setAttribute('class', 'no-thumbnail');
        fTop.appendChild(noThumb);
    }

    var fbottom = document.createElement('div');
    fbottom.setAttribute('class', 'tile-footer');
    tileCon.appendChild(fbottom);

    let titleHead3 = document.createElement('h3');
    titleHead3.setAttribute('class', 'tile-title');
    titleHead3.innerText = data.fields.headline;

    fbottom.appendChild(titleHead3);

    let titlepara = document.createElement('p');
    titlepara.setAttribute('class', 'tile-subtitle');
    titlepara.innerText = data.fields.trailText;
    fbottom.appendChild(titlepara);


    return tileCon;
 }


fetchData()


function createSPorts(sportsData) {

    // var secondLeftTile = document.getElementsByClassName('sportsWrapper')[0];


    for (var i = 0; i < sportsData.length; i++) {
        var parentContainer = document.querySelector('.sportsWrapper');
        createTile(sportsData[i], parentContainer)
    }




}


function createCulture(sportsData) {

    // var secondLeftTile = document.getElementsByClassName('sportsWrapper')[0];


    for (var i = 0; i < sportsData.length; i++) {
        var parentContainer = document.querySelector('.cultureWrapper');
        createTile(sportsData[i], parentContainer)
    }




}

function createLifeStyle(sportsData) {

    // var secondLeftTile = document.getElementsByClassName('sportsWrapper')[0];


    for (var i = 0; i < sportsData.length; i++) {
        var parentContainer = document.querySelector('.lifeStyle');
        createTile(sportsData[i], parentContainer)
    }




}

createTile()
