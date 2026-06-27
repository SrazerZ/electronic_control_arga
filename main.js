const endpoint = "http://10.113.31.226";

function getDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON") {
            leddapur.style.backgroundColor = "#0c55b4";
            dapurledimage.src="./torch.png";
        }else {
            leddapur.style.backgroundColor = "#96bff5";
            dapurledimage.src="./torch (1).png";
        }
    });
}

function getKamarLed() {
    fetch(endpoint + "/kamar", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON") {
            ledkamar.style.backgroundColor = "#0c55b4";
            kamarledimage.src="./torch.png";
        }else {
            ledkamar.style.backgroundColor = "#96bff5";
            kamarledimage.src="./torch (1).png";
        }
    });
}

function getRuangMakanLed() {
    fetch(endpoint + "/ruangmakan", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON") {
            ledruangmakan.style.backgroundColor = "#0c55b4";
            ruangmakanledimage.src="./torch.png";
        }else {
            ledruangmakan.style.backgroundColor = "#96bff5";
            ruangmakanledimage.src="./torch (1).png";
        }
    });
}



function setDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setKamarLed() {
    fetch(endpoint + "/kamar", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setRuangMakanLed() {
    fetch(endpoint + "/ruangmakan", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setGarasiLed() {
    fetch(endpoint + "/garasi", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

getDapurLed();
getKamarLed();
getRuangMakanLed();
