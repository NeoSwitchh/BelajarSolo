let dataNilai = [
    {
        "nama" : "Pancasila",
        "nilai" : 3.0,
        "sks" : 3
    },
    {
        "nama" : "Sistem Digital",
        "nilai" : 4.0,
        "sks" : 4
    },
    {
        "nama" : "Bahasa Inggris",
        "nilai" : 3.0,
        "sks" : 4
    },
    {
        "nama" : "TBA",
        "nilai" : 4.0,
        "sks" : 3
    },
    {
        "nama" : "Konsep Pemrograman",
        "nilai" : 4.0,
        "sks" : 4
    }
]

function konversi (n1){
    switch (n1) {
        case 4:
            return "A"
            break;
        case 3:
            return "B"
            break;
        case 2:
            return "C"
            break;
        case 1:
            return "D"
            break;
        case 0:
            return "E"
            break;
        default:
            break;
    }
}
var tbl = document.getElementById("myRow");

var cell6 = document.createElement("td");
let totalSks = 0;
let totalIp = 0;
for (var i = 0; i < dataNilai.length; i++) {
    var row = document.createElement("tr");

    // nama
    var cell = document.createElement("td");
    var cellText = document.createTextNode(dataNilai[i].nama);
    // nilai angka
    var cell2 = document.createElement("td");
    var cellText2 = document.createTextNode(dataNilai[i].nilai);
    // nilai huruf
    var cell3 = document.createElement("td");
    var cellText3 = document.createTextNode(konversi(dataNilai[i].nilai));
    // sks
    var cell4 = document.createElement("td");
    let sks = dataNilai[i].sks;
    totalSks = totalSks+sks;
    var cellText4 = document.createTextNode(sks);
    //ip
    var cell5 = document.createElement("td");
    let ip = dataNilai[i].nilai*dataNilai[i].sks;
    totalIp = totalIp+ip;
    var cellText5 = document.createTextNode(ip);
    cell.appendChild(cellText);
    cell2.appendChild(cellText2);
    cell3.appendChild(cellText3);
    cell4.appendChild(cellText4);
    cell5.appendChild(cellText5);

    row.appendChild(cell);
    row.appendChild(cell4);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell5);

    tbl.appendChild(row);
}
// ipk
var cellText6 = document.createTextNode(totalIp/totalSks);
cell6.appendChild(cellText6);
row.appendChild(cell6);
tbl.appendChild(row);