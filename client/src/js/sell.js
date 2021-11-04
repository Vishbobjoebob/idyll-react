function isWhitespaceOrEmpty(text) {
    return !/[^\s]/.test(text);
}

async function submitInformation() {
    document.getElementById("item-information").style.display = "none";
    document.getElementById("loader").style.visibility = "visible";
    let dish = {
        "dishName": document.getElementById("dish-name").value,
        "dishPrice": document.getElementById("dish-price").value,
        "category": document.getElementById("category-selection").value,
        "description": document.getElementById("dish-description").value,
    };

    let file = document.getElementById('dish-photo').files[0];

    const ref = firebase.storage().ref().child(file.name);
    const metadata = {
        contentType: file.type
    }
    let snapshot = await ref.put(file, metadata);

    let pictureURL = await snapshot.ref.getDownloadURL();
    dish.pictureURL = pictureURL;
    dish.isDeliverable = document.getElementById("deliverable").checked

    const rawResponse = await fetch('https://us-central1-idyll-29e66.cloudfunctions.net/server/postdata', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(dish)
    });
    const content = await rawResponse.json();

    if (content.success) {
        alert('Listing posted!')
        window.location.assign("index.html");
    } else {
        alert('Something went wrong... please try again later.')
    }
}

function formatPrice(event) {
    if (document.getElementById('dish-price').value.indexOf('.') != -1) {
        console.log(document.getElementById('dish-price').value);
        if (document.getElementById('dish-price').value.split('.')[1].length == 2 && event.keyCode != 8) {
            return false;
        }
    } else {
        return event.keyCode !== 69
    }
}

function showOtherInput() {
    if (document.getElementById("category-selection").value === "Other") {
        document.getElementById("other-input").style.display = "block";
    } else {
        document.getElementById("other-input").style.display = "none";
    }
}

async function displayImage() {
    let x = await getBase64(document.getElementById('dish-photo').files[0]);
    console.log(x);
    const img = document.createElement("img");
    img.src = x;
    img.classList.add("obj");
    document.body.appendChild(img)

}

//document.getElementById("submit-btn").addEventListener('click', submitInformation);