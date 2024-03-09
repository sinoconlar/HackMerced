const url = "https://clinicaltables.nlm.nih.gov/api/conditions/v3/search";
let showAllClicked = false;

function get() {
    const name = document.getElementById("name").value;
    var xhttp = new XMLHttpRequest();
    let flag = false;
    xhttp.open("GET", url + "/grades");
    xhttp.send();
    xhttp.onload = function() {
        let data = JSON.parse(xhttp.response);
        let keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            if(keys[i] == name) {
                document.getElementById("get_grade").value = data[keys[i]];
                flag = true;
            }
        }
        if(flag == false) {
            document.getElementById("get_grade").value = "Name not found";
        }
    }
}

function add() {
    const name = document.getElementById("name2").value;
    const grade = document.getElementById("grade2").value;
    const body = {"name": name, "grade": grade};
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", url + "/grades", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    let json_data = JSON.stringify(body);
    xhttp.send(json_data);
}

function edit() {
    const name = document.getElementById("name3").value;
    const grade = document.getElementById("grade3").value;
    const body = {"grade": grade};
    var xhttp = new XMLHttpRequest();

    xhttp.open("PUT", url + "/grades" + "/" + name, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    let json_data = JSON.stringify(body);
    xhttp.send(json_data);
}

function del() {
    const name = document.getElementById("name4").value;
    var xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", url + "/grades" + "/" + name, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
}

function find() {
    var xhttp = new XMLHttpRequest();
    let text = "<table class='center' border='1'><tr><th>Student Name</th><th>Grade</th></tr>";
    xhttp.open("GET", url + "/grades");
    xhttp.send();

    xhttp.onload = function() {
        let data = JSON.parse(xhttp.response);
        let keys = Object.keys(data);
        if (showAllClicked) {
            document.getElementById("get_all").innerHTML = "";
            showAllClicked = false;
        } 
        else {
            for (let i = 0; i < keys.length; i++) {
                text += "<tr><td>" + keys[i] + "</td><td>" + data[keys[i]] + "</td></tr>";
            }
            text += "</table>";
            document.getElementById("get_all").innerHTML = text;
            showAllClicked = true;
        }
    }
}