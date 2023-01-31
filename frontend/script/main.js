


// function fetchData() {

//     let key = '37a15cab-b02a-4274-a344-68fc3f5cb899';
//     let baseURL = 'https://content.guardianapis.com/search'
//     let url = `${baseURL}?section=news&show-fields=headline,trailText,thumbnail&api-key=${key}`;
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.open('GET', url);
//     xmlhttp.send();

//     xmlhttp.onreadystatechange = function (evt) {
//         if (evt.target.readyState == 4 && evt.target.status == 200) {
//             let data = JSON.parse(evt.target.response)

//             console.log(data);
//         }

//     }


// }

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
        }

    }
}

fetchSportsData();
fetchCulturesData();
fetchlifeAndStyleData();



function createTile(data) {

    var secondLeftTile = document.getElementsByClassName('second-middle')[0];

    var tileCon = document.createElement('div');
    tileCon.setAttribute('class', 'tile');
    secondLeftTile.appendChild(tileCon);

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
// fetchData(createTile())

createTile()

// function loadTopStories(data) {


//     let middleLeft = document.getElementsByClassName('middile-left')[0];

//     let middileTop = document.createElement('div');
//     middileTop.setAttribute('class', 'middleTop');
//     if (data[0].fields.thumbnail) {
//         let img2 = document.createElement('img');
//         img2.setAttribute('class', 'img2');
//         img2.setAttribute('src', data[0].fields.thumbnail);
//         img2.setAttribute('alt', 'News Image');
//         middileTop.appendChild(img2);
//     } else {
//         let noThumb = document.createElement('div');
//         noThumb.setAttribute('class', 'no-thumbnail');
//         middileTop.appendChild(noThumb);
//     }


//     let mBottom = document.createElement('div');
//     mBottom.setAttribute('class', 'middileBottom');
//     let gH2 = document.createElement('h2');
//     gH2.setAttribute('class', 'global-head');
//     gH2.innerText = data[0].fields.headline;

//     let para = document.createElement('p');
//     para.setAttribute('class', 'para-one');
//     para.innerText = data[0].fields.trailText;

//     mBottom.appendChild(gH2);
//     mBottom.appendChild(para);

//     middleLeft.appendChild(mBottom);


    // middleRIght start here

    // var middleRight = document.getElementsByClassName('middile-right')[0];

    // One start here

    // var mRight = document.createElement('div');
    // mRight.setAttribute('class', 'one');
    // middleRight.prepend(mRight);

    // middleRight.insertBefore(mRight, middleRight.children[2])

    // var oTop = document.createElement('div');
    // oTop.setAttribute('class', 'one-top');
    // mRight.appendChild(oTop);

    // if (data[1].fields.thumbnail) {
    //     let img3 = document.createElement('img');
        // var clasName = 'img3';
    //     img3.setAttribute('class', 'img3');
    //     img3.setAttribute('src', data[1].fields.thumbnail);
    //     img3.setAttribute('alt', 'News Image');
    //     oTop.appendChild(img3);
    // } else {
    //     let noThumb = document.createElement('div');
    //     noThumb.setAttribute('class', 'no-thumbnail');
    //     noThumb.style.height = '144px';
    //     oTop.appendChild(noThumb);
    // }

    // let oBottom = document.createElement('div');
    // oBottom.setAttribute('class', 'one-bottom');
    // let whiteHead4 = document.createElement('h4');
    // whiteHead4.setAttribute('class', 'head-four');
    // whiteHead4.innerText = data[1].fields.headline;


    // oBottom.appendChild(whiteHead4);
    // mRight.appendChild(oBottom);

    // Two start here

    // var tDiv = document.createElement('div');
    // tDiv.setAttribute('class', 'two');
    // middleRight.insertBefore(tDiv, middleRight.children[1]);

    // var tTop = document.createElement('div');
    // tTop.setAttribute('class', 'two-top');
    // tDiv.appendChild(tTop);

    // if (data[2].fields.thumbnail) {
    //     let img4 = document.createElement('img');
    //     img4.setAttribute('class', 'img3');
    //     img4.setAttribute('src', data[2].fields.thumbnail);
    //     img4.setAttribute('alt', 'News Image');
    //     tDiv.appendChild(img4);
    // } else {
    //     let noThumb = document.createElement('div');
    //     noThumb.setAttribute('class', 'no-thumbnail');
    //     noThumb.style.height = '144px';
    //     tDiv.appendChild(noThumb);
    // }

    // let tBottom = document.createElement('div');
    // tBottom.setAttribute('class', 'two-bottom');
    // let sadiqHead4 = document.createElement('h4');
    // sadiqHead4.setAttribute('class', 'head-four');
    // sadiqHead4.innerText = data[2].fields.headline;


    // tBottom.appendChild(sadiqHead4);
    // tDiv.appendChild(tBottom);

    // Three start here

    // var threeDiv = document.createElement('div');
    // threeDiv.setAttribute('class', 'three');
    // middleRight.insertBefore(threeDiv, middleRight.children[2]);


    // let spaikeHead4 = document.createElement('h4');
    // spaikeHead4.setAttribute('class', 'head-four');
    // spaikeHead4.innerText = data[3].fields.headline;


    // threeDiv.appendChild(spaikeHead4);

    // Four start here

    // var fourDiv = document.createElement('div');
    // fourDiv.setAttribute('class', 'four');
    // middleRight.appendChild(fourDiv);


    // let spanishHead4 = document.createElement('h4');
    // spanishHead4.setAttribute('class', 'head-four');
    // spanishHead4.innerText = data[4].fields.headline;


    // fourDiv.appendChild(spanishHead4);

    // Second bottom here

    // var sBottom = document.getElementsByClassName('second-bottom')[0];


    // Bottom left start here


    // for (var i = 0; i < data.slice(5, 8).length; i++) {
    //     sBottom.appendChild(createTile(data[i]))
    // }





    // Bottom middile start here

    // var bMiddile = document.createElement('div');
    // bMiddile.setAttribute('class', 'bottom-middile');
    // sBottom.appendChild(bMiddile);

    // var topFive = document.createElement('div');
    // topFive.setAttribute('class', 'five-top');
    // bMiddile.appendChild(topFive);

    // if (data[6].fields.thumbnail) {
    //     let img6 = document.createElement('img');
    //     img6.setAttribute('class', 'img5');
    //     img6.setAttribute('src', data[6].fields.thumbnail);
    //     img6.setAttribute('alt', 'News Image');
    //     topFive.appendChild(img6);
    // } else {
    //     let noThumb = document.createElement('div');
    //     noThumb.setAttribute('class', 'no-thumbnail');
    //     topFive.appendChild(noThumb);
    // }

    // var bottomFive = document.createElement('div');
    // bottomFive.setAttribute('class', 'five-bottom');
    // bMiddile.appendChild(bottomFive);

    // let fHead5 = document.createElement('h3');
    // fHead5.setAttribute('class', 'head-five');
    // fHead5.innerText = data[6].fields.headline;

    // bottomFive.appendChild(fHead5);

    // let fpara = document.createElement('p');
    // fpara.setAttribute('class', 'para-two');
    // fpara.innerText = data[6].fields.trailText;

    // bottomFive.appendChild(fpara);

    // // Bottom Right start here

    // var bRight = document.createElement('div');
    // bRight.setAttribute('class', 'botom-right');
    // sBottom.appendChild(bRight);

    // var fiveTop = document.createElement('div');
    // fiveTop.setAttribute('class', 'five-top');
    // bRight.appendChild(fiveTop);

    // if (data[7].fields.thumbnail) {
    //     let img7 = document.createElement('img');
    //     img7.setAttribute('class', 'img5');
    //     img7.setAttribute('src', data[7].fields.thumbnail);
    //     img7.setAttribute('alt', 'News Image');
    //     fiveTop.appendChild(img7);
    // } else {
    //     let noThumb = document.createElement('div');
    //     noThumb.setAttribute('class', 'no-thumbnail');
    //     fiveTop.appendChild(noThumb);
    // }

    // var fiveBottom = document.createElement('div');
    // fiveBottom.setAttribute('class', 'five-bottom');
    // bRight.appendChild(fiveBottom);

    // let fH5 = document.createElement('h3');
    // fH5.setAttribute('class', 'head-five');
    // fH5.innerText = data[7].fields.headline;

    // fiveBottom.appendChild(fH5);

    // let fp5 = document.createElement('p');
    // fp5.setAttribute('class', 'para-two');
    // fp5.innerText = data[7].fields.trailText;

    // fiveBottom.appendChild(fp5);

    // Third div start here

    // var thirdDiv = document.getElementsByClassName('third-div')[0];

    // for (var i = 0; i < data.slice(8, data.length).length; i++) {
    //     thirdDiv.appendChild(createTile(data[i]))
    // }

    // thirdDiv.appendChild(createTile(data[8]))
    // thirdDiv.appendChild(createTile(data[9]))
    // thirdDiv.appendChild(createTile(data[1]))

    // Third top start here

    // var thirdTop = document.createElement('div');
    // thirdTop.setAttribute('class', 'third-top');
    // thirdDiv.prepend(thirdTop);

    // var sportsH1 = document.createElement('h1');
    // sportsH1.setAttribute('class', 'sports');
    // sportsH1.innerText = 'Sports';
    // thirdDiv.appendChild(sportsH1);

    // // Third bottom start here

    // var bottomThree = document.createElement('div');
    // bottomThree.setAttribute('class', 'third-bottom');
    // thirdDiv.appendChild(bottomThree);

    // var tLeft = document.createElement('div');
    // tLeft.setAttribute('class', 'third-left');
    // bottomThree.appendChild(tLeft);

    // var fT = document.createElement('div');
    // fT.setAttribute('class', 'five-top');
    // tLeft.appendChild(fT);

    // if (data[8].fields.thumbnail) {
    //     let img8 = document.createElement('img');
    //     img8.setAttribute('class', 'img5');
    //     img8.setAttribute('src', data[8].fields.thumbnail);
    //     img8.setAttribute('alt', 'News Image');
    //     fT.appendChild(img8);
    // } else {
    //     let noThumb = document.createElement('div');
    //     noThumb.setAttribute('class', 'no-thumbnail');
    //     fT.appendChild(noThumb);
    // }

    // var threeFiveBottom = document.createElement('div');
    // threeFiveBottom.setAttribute('class', 'five-bottom');
    // tLeft.appendChild(threeFiveBottom);

    // let fH8 = document.createElement('h3');
    // fH8.setAttribute('class', 'head-five');
    // fH8.innerText = data[8].fields.headline;

    // threeFiveBottom.appendChild(fH8);

    // Third middile start here

    // var thirdMid = document.createElement('div');
    // thirdMid.setAttribute('class', 'third-mid');
    // thirdDiv.appendChild(thirdMid);

    // var fT9 = document.createElement('div');
    // fT9.setAttribute('class', 'five-top');
    // thirdMid.appendChild(fT9);

    // if (data[9].fields.thumbnail) {
    //     let img9 = document.createElement('img');
    //     img9.setAttribute('class', 'img5');
    //     img9.setAttribute('src', data[9].fields.thumbnail);
    //     img9.setAttribute('alt', 'News Image');
    //     fT9.appendChild(img9);
    // } else {
    //     let noThumb = document.createElement('div');
    //     noThumb.setAttribute('class', 'no-thumbnail');
    //     fT9.appendChild(noThumb);
    // }

    // var midFiveBottom = document.createElement('div');
    // midFiveBottom.setAttribute('class', 'five-bottom');
    // thirdMid.appendChild(midFiveBottom);

    // let fH9 = document.createElement('h3');
    // fH9.setAttribute('class', 'head-five');
    // fH9.innerText = data[9].fields.headline;

    // midFiveBottom.appendChild(fH9);

    // Third Right start here

    // var thirdright = document.createElement('div');
    // thirdright.setAttribute('class', 'third-right');
    // thirdDiv.appendChild(thirdright);

    // var fT10 = document.createElement('div');
    // fT10.setAttribute('class', 'five-top');
    // thirdright.appendChild(fT10);

    // if (data[7].fields.thumbnail) {
    //     let img10 = document.createElement('img');
    //     img10.setAttribute('class', 'img5');
    //     img10.setAttribute('src', data[7].fields.thumbnail);
    //     img10.setAttribute('alt', 'News Image');
    //     fT10.appendChild(img10);
    // } else {
    //     let noThumb = document.createElement('div');
    //     noThumb.setAttribute('class', 'no-thumbnail');
    //     fT10.appendChild(noThumb);
    // }

    // var rightFiveBottom = document.createElement('div');
    // rightFiveBottom.setAttribute('class', 'five-bottom');
    // thirdright.appendChild(rightFiveBottom);

    // let fH10 = document.createElement('h3');
    // fH10.setAttribute('class', 'head-five');
    // fH10.innerText = data[7].fields.headline;

    // rightFiveBottom.appendChild(fH10);

// }


