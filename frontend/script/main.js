


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

            loadTopStories(data.response.results);
        }

    }


}
fetchData();

function loadTopStories(data) {


    let middleLeft = document.getElementsByClassName('middile-left')[0];

    let middileTop = document.createElement('div');
    middileTop.setAttribute('class', 'middleTop');
    if (data[0].fields.thumbnail) {
        let img2 = document.createElement('img');
        img2.setAttribute('class', 'img2');
        img2.setAttribute('src', data[0].fields.thumbnail);
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
    gH2.innerText = data[0].fields.headline;

    let para = document.createElement('p');
    para.setAttribute('class', 'para-one');
    para.innerText = data[0].fields.trailText;

    mBottom.appendChild(gH2);
    mBottom.appendChild(para);

    middleLeft.appendChild(mBottom);


    // middleRIght start here

    var middleRight = document.getElementsByClassName('middile-right')[0];

    var mRight = document.createElement('div');
    mRight.setAttribute('class', 'one');
    middleRight.prepend(mRight);

    // middleRight.insertBefore(mRight, middleRight.children[2])

    var oTop = document.createElement('div');
    oTop.setAttribute('class', 'one-top');
    mRight.appendChild(oTop);

    if (data[1].fields.thumbnail) {
        let img3 = document.createElement('img');
        // var clasName = 'img3';
        img3.setAttribute('class', 'img3');
        img3.setAttribute('src', data[1].fields.thumbnail);
        img3.setAttribute('alt', 'News Image');
        oTop.appendChild(img3);
    } else {
        let noThumb = document.createElement('div');
        noThumb.setAttribute('class', 'no-thumbnail');
        noThumb.style.height = '144px';
        oTop.appendChild(noThumb);
    }



    // right second elemet




}

function secondRIght(){
}

function thridrRIght(){
}
