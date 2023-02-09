


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

            news(data.response.results);
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
            culture(data.response.results);
    
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
            lifeAndStyle(data.response.results);
        }

    }
}


fetchData();
fetchCulturesData();
fetchlifeAndStyleData();


function loadTopStories(data) {


    let middleLeft = document.getElementsByClassName('middile-left')[0];

    let middileTop = document.createElement('div');
    middileTop.setAttribute('class', 'middleTop');
    if (data.fields.thumbnail) {
        let img2 = document.createElement('img');
        img2.setAttribute('class', 'img2');
        img2.setAttribute('src', data.fields.thumbnail);
        img2.setAttribute('alt', 'News Image');
        middileTop.appendChild(img2);
    } else {
        let noThumb = document.createElement('div');
        noThumb.setAttribute('class', 'no-thumbnail');
        middileTop.appendChild(noThumb);
    }
    middleLeft.appendChild(middileTop);


    let mBottom = document.createElement('div');
    mBottom.setAttribute('class', 'middileBottom');
    let gH2 = document.createElement('h2');
    gH2.setAttribute('class', 'global-head');
    gH2.innerText = data.fields.headline;

    let para = document.createElement('p');
    para.setAttribute('class', 'para-one');
    para.innerText = data.fields.trailText;

    mBottom.appendChild(gH2);
    mBottom.appendChild(para);

    middleLeft.appendChild(mBottom);



    // middleRIght start here

    var middleRight = document.getElementsByClassName('middile-right')[0];

    // One start here

    var mRight = document.createElement('div');
    mRight.setAttribute('class', 'one');
    middleRight.prepend(mRight);

    // middleRight.insertBefore(mRight, middleRight.children[2])

    var oTop = document.createElement('div');
    oTop.setAttribute('class', 'one-top');
    mRight.appendChild(oTop);

    if (data.fields.thumbnail) {
        let img3 = document.createElement('img');
        // var clasName = 'img3';
        img3.setAttribute('class', 'img3');
        img3.setAttribute('src', data.fields.thumbnail);
        img3.setAttribute('alt', 'News Image');
        oTop.appendChild(img3);
    } else {
        let noThumb = document.createElement('div');
        noThumb.setAttribute('class', 'no-thumbnail');
        noThumb.style.height = '144px';
        oTop.appendChild(noThumb);
    }

    let oBottom = document.createElement('div');
    oBottom.setAttribute('class', 'one-bottom');
    let whiteHead4 = document.createElement('h4');
    whiteHead4.setAttribute('class', 'head-four');
    whiteHead4.innerText = data.fields.headline;


    oBottom.appendChild(whiteHead4);
    mRight.appendChild(oBottom);

    // Two start here

    var tDiv = document.createElement('div');
    tDiv.setAttribute('class', 'two');
    middleRight.insertBefore(tDiv,middleRight.children[1]);

    var tTop = document.createElement('div');
    tTop.setAttribute('class', 'two-top');
    tDiv.appendChild(tTop);

    if (data.fields.thumbnail) {
        let img4 = document.createElement('img');
        img4.setAttribute('class', 'img3');
        img4.setAttribute('src', data.fields.thumbnail);
        img4.setAttribute('alt', 'News Image');
        tDiv.appendChild(img4);
    } else {
        let noThumb = document.createElement('div');
        noThumb.setAttribute('class', 'no-thumbnail');
        noThumb.style.height = '144px';
        tDiv.appendChild(noThumb);
    }

    let tBottom = document.createElement('div');
    tBottom.setAttribute('class', 'two-bottom');
    let sadiqHead4 = document.createElement('h4');
    sadiqHead4.setAttribute('class', 'head-four');
    sadiqHead4.innerText = data.fields.headline;


    tBottom.appendChild(sadiqHead4);
    tDiv.appendChild(tBottom);

    // Three start here
 
    var threeDiv = document.createElement('div');
    threeDiv.setAttribute('class', 'three');
    middleRight.insertBefore(threeDiv,middleRight.children[2]);

    
    let spaikeHead4 = document.createElement('h4');
    spaikeHead4.setAttribute('class', 'head-four');
    spaikeHead4.innerText = data.fields.headline;


    threeDiv.appendChild(spaikeHead4);

    // Four start here
 
    var fourDiv = document.createElement('div');
    fourDiv.setAttribute('class', 'four');
    middleRight.appendChild(fourDiv);

    
    let spanishHead4 = document.createElement('h4');
    spanishHead4.setAttribute('class', 'head-four');
    spanishHead4.innerText = data.fields.headline;


    fourDiv.appendChild(spanishHead4);

    

}
// Second bottom here


function createCulture(data ,sBottom){

    var sBottom = document.getElementsByClassName('second-bottom')[0];

    
    // Bottom left start here

    var bLeft = document.createElement('div');
    bLeft.setAttribute('class', 'bottom-left');
    sBottom.appendChild(bLeft);
    bLeft.style.margin = '6px';

    var fTop = document.createElement('div');
    fTop.setAttribute('class' , 'five-top');
    bLeft.appendChild(fTop);

    if (data.fields.thumbnail) {
        let img5 = document.createElement('img');
        img5.setAttribute('class', 'img5');
        img5.setAttribute('src', data.fields.thumbnail);
        img5.setAttribute('alt', 'News Image');
        fTop.appendChild(img5);
    } else {
        let noThumb = document.createElement('div');
        noThumb.setAttribute('class', 'no-thumbnail');
        fTop.appendChild(noThumb);
    }
  
    var fbottom = document.createElement('div');
    fbottom.setAttribute('class' , 'five-bottom');
    bLeft.appendChild(fbottom);

    let fiveHead3 = document.createElement('h3');
    fiveHead3.setAttribute('class', 'head-five');
    fiveHead3.innerText = data.fields.headline;

    fbottom.appendChild(fiveHead3);

    let fivepara = document.createElement('p');
    fivepara.setAttribute('class', 'para-two');
    fivepara.innerText = data.fields.trailText;

    fbottom.appendChild(fivepara);

}

function news(data) {

    for (var i = 0; i < 1; i++) {
        var parentContainer = document.querySelector('.second-middle');
        loadTopStories(data[i], parentContainer)
    }

}

function culture(data) {

    for (var i = 0; i < 9; i++) {
        var parentContainer = document.querySelector('.second-bottom');
        createCulture(data[i], parentContainer)
    }

}

function createLifeAndStyle(data ,thirdDiv){

    var thirdDiv = document.getElementsByClassName('third-div')[0];



    var bLeft = document.createElement('div');
    bLeft.setAttribute('class', 'bottom-left');
    thirdDiv.appendChild(bLeft);
    bLeft.style.margin = '6px';

    var fTop = document.createElement('div');
    fTop.setAttribute('class' , 'five-top');
    bLeft.appendChild(fTop);

    if (data.fields.thumbnail) {
        let img5 = document.createElement('img');
        img5.setAttribute('class', 'img5');
        img5.setAttribute('src', data.fields.thumbnail);
        img5.setAttribute('alt', 'News Image');
        fTop.appendChild(img5);
    } else {
        let noThumb = document.createElement('div');
        noThumb.setAttribute('class', 'no-thumbnail');
        fTop.appendChild(noThumb);
    }
  
    var fbottom = document.createElement('div');
    fbottom.setAttribute('class' , 'five-bottom');
    bLeft.appendChild(fbottom);

    let fiveHead3 = document.createElement('h3');
    fiveHead3.setAttribute('class', 'head-five');
    fiveHead3.innerText = data.fields.headline;

    fbottom.appendChild(fiveHead3);

    let fivepara = document.createElement('p');
    fivepara.setAttribute('class', 'para-two');
    fivepara.innerText = data.fields.trailText;

    fbottom.appendChild(fivepara);
}

function lifeAndStyle(data) {

    for (var i = 0; i < 9; i++) {
        var container = document.querySelector('.third-div');
        createLifeAndStyle(data[i], container)
    }

}
