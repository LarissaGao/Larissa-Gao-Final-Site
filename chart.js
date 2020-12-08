"use strict";

var chartDiv = document.getElementById('chart_container');

var data = [{
        "Age": "18-25",
        "Value": 29.4
    },
    {
        "Age": "26-49",
        "Value": 25.0
    },
    {
        "Age": "50+",
        "Value": 14.0
    }
];

var arrayValues = [];

for (var i = 0; i < data.length; i++) {
    arrayValues.push(data[i].Value);
};

var largest = Math.max.apply(Math, arrayValues);

for (var i = 0; i < data.length; i++) {

    chartDiv.innerHTML += '<div class="rows" id="r' + i + '">' +
        '<div class="Age">' + data[i].Age + '</div>' +
        '<div class="Value" style="width:' + (data[i].Value * 58) / largest + '%"></div>' +
        '<div class="ValueNumber">' + data[i].Value + '</div>' +
        '</div>'
}
