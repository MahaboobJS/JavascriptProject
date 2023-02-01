

function fetchData() {
    let key = '37a15cab-b02a-4274-a344-68fc3f5cb899';
    let baseURL = 'https://content.guardianapis.com/search'
    let url = `${baseURL}?section=news&show-fields=headline,trailText,thumbnail&api-key=${key}`;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function (evt) {
        if (evt.target.readyState == 4 && evt.target.status == 200) {
            let data = JSON.parse(evt.target.response);

            let response = data.response.results;

            let storiesLeftCon = document.querySelector('.top-stories-left');
            // console.log(createCard())
            storiesLeftCon.innerHTML = createCard(response[0], false);

            let internalElements = document.querySelectorAll('.inner-container');

            for (var i = 0; i < internalElements.length; i++) {

                let flag = false;

                if (i == 2 || i == 3) {
                    flag = true;

                }
                internalElements[i].innerHTML = createCard(response[i + 1], flag)

            }
            // internalElements.forEach(function(ele , i){
            //     ele.innerHTML = createCard(response[i+1]);
            // });

        }

    }

}

fetchData();

function createCard(cardInformation, noimage) {
    let cardEleTitle = `<h2> ${cardInformation.fields.headline} </h2>`;
    let cardElePara = `<p> ${cardInformation.fields.trailText}</p>`

    let cardBody;
    if (!noimage) {
        cardBody = `<div class='card-body'> ${cardEleTitle} ${cardElePara}</div>`;
    } else {
        cardBody = `<div class='card-body h-100'> ${cardEleTitle} ${cardElePara}</div>`;
    }


    let card;
    if (cardInformation.fields.thumbnail && !noimage) {
        card = `<div class='card' style='background-image : url(${cardInformation.fields.thumbnail}); background-repeat:no-repeat'> ${cardBody}</div>`
    } else if (!noimage) {
        card = `<div class='card no-thumbnail' style='background-position: 50% 50px;'> ${cardBody}</div>`
    } else {
        card = `<div class='card'> ${cardBody}</div>`
    } 
    return card;
}





