$(document).ready(function () {
    var menu = [
        {
            thingID: "sweetroll",
            name: "Sweet Roll",
            price: 5,
            thingcount: 1
        },
        {
            thingID: "creme",
            name: "Boiled Creme Treat",
            price: 4,
            thingcount: 1
        },
        {
            thingID: "honey",
            name: "Honey Nut Treat",
            price: 2,
            thingcount: 1
        },
        {
            thingID: "portalcake",
            name: "Portal Cake",
            price: 12,
            thingcount: 1
        },
        {
            thingID: "applepie",
            name: "Apple Pie",
            price: 12,
            thingcount: 1
        },
        {
            thingID: "snowberry",
            name: "Snowberry Crostata",
            price: 5,
            thingcount: 1
        },
        {
            thingID: "jazbay",
            name: "Jazbay Crostata",
            price: 5,
            thingcount: 1
        },
        {
            thingID: "lavenderdumpling",
            name: "Lavender Dumpling",
            price: 4,
            thingcount: 1
        },
        {
            thingID: "appledumpling",
            name: "Apple Dumpling",
            price: 4,
            thingcount: 1
        },
        {
            thingID: "longtaffy",
            name: "Long Taffy Treat",
            price: 2,
            thingcount: 1
        }
    ];

    var orderList = [];

    for (var i = 0; i < menu.length; i++) {
        menuPrintFunction(menu[i]);
    }

    $("#sweetroll").click(function () {

        orderList = clickAddFunction(menu[0], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });

    $("#creme").click(function () {

        orderList = clickAddFunction(menu[1], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#honey").click(function () {

        orderList = clickAddFunction(menu[2], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#portalcake").click(function () {

        orderList = clickAddFunction(menu[3], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#applepie").click(function () {

        orderList = clickAddFunction(menu[4], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#snowberry").click(function () {

        orderList = clickAddFunction(menu[5], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#jazbay").click(function () {

        orderList = clickAddFunction(menu[6], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#lavenderdumpling").click(function () {

        orderList = clickAddFunction(menu[7], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#appledumpling").click(function () {

        orderList = clickAddFunction(menu[8], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#longtaffy").click(function () {
        orderList = clickAddFunction(menu[9], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#sweetrollsub").click(function () {

        orderList = clickSubtractFunction(menu[0], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });

    $("#cremesub").click(function () {

        orderList = clickSubtractFunction(menu[1], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#honeysub").click(function () {

        orderList = clickSubtractFunction(menu[2], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#portalcakesub").click(function () {

        orderList = clickSubtractFunction(menu[3], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#applepiesub").click(function () {

        orderList = clickSubtractFunction(menu[4], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#snowberrysub").click(function () {

        orderList = clickSubtractFunction(menu[5], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#jazbaysub").click(function () {

        orderList = clickSubtractFunction(menu[6], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#lavenderdumplingsub").click(function () {

        orderList = clickSubtractFunction(menu[7], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#appledumplingsub").click(function () {

        orderList = clickSubtractFunction(menu[8], orderList);
        orderbox.innerHTML = "";
        orderPrintFunctionFull(orderList);

    });
    $("#longtaffysub").click(function () {
        orderList = clickSubtractFunction(menu[9], orderList);
        orderbox.innerHTML = "";
        // for (var i = 0; i < orderList.length; i++) {
        //     orderPrintFunction(orderList[i]);
        // };
        orderPrintFunctionFull(orderList);
    });
});


function clickAddFunction(objVar, orderList) {
    if (iterateOverListFunction(objVar, orderList)) {
        return iterateAndAddListFunction(objVar, orderList);
    } else {
        orderList.push(objVar);
        return orderList;
    }
};

function clickSubtractFunction(objVar, orderList) {
    if (iterateOverListFunction(objVar, orderList)) {
        return iterateAndSubtractListFunction(objVar, orderList);
    } else {
        
        return orderList;
    }
};

// function orderPrintFunction(o) {
//     orderbox.innerHTML += (" " + o.name + " --- $" + (o.price * o.thingcount) + " --- " + o.thingcount + "<br/>");

// };

function orderPrintFunctionFull(orderList) {
    for (var i = 0; i < orderList.length; i++) {
        o = orderList[i];
        orderbox.innerHTML += (" " + o.name + " --- " + o.thingcount + " --- $" + (o.price * o.thingcount).toFixed(2) + "<br/>");
    };
    var total = totalFunction(orderList);
    orderbox.innerHTML += ("<br/>SubTotal:  $" + total.toFixed(2));
    orderbox.innerHTML += ("<br/>Tax:  $" + (total * .06).toFixed(2));
    orderbox.innerHTML += ("<br/><br>Grand Total:  $" + (total * 1.06).toFixed(2));

};

function totalFunction(orderList){
    var total = 0;
    for (var i = 0; i < orderList.length; i++) {
        total = total + (orderList[i].price * orderList[i].thingcount);
    };
    return total;
};

function iterateOverListFunction(objectVar, orderList) {
    for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].thingID === objectVar.thingID) {
            return true;
        };
    };
    return false;
};

function iterateAndAddListFunction(objectVar, orderList) {
    for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].thingID === objectVar.thingID) {
            orderList[i].thingcount += 1;
            return orderList;
        };
    };
}

function iterateAndSubtractListFunction(objectVar, orderList) {
    for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].thingID === objectVar.thingID && orderList[i].thingcount > 1) {
            orderList[i].thingcount -= 1;
            return orderList;
        } else if(orderList[i].thingID === objectVar.thingID && orderList.length === 1){
            orderList = [];
            return orderList;
        } else if(orderList[i].thingID === objectVar.thingID && orderList[i].thingcount === 1){
            orderList.splice(i,1);
            return orderList;
        };
    };
}

function menuPrintFunction(o) {
    var menubox = document.getElementById("menuBox");
    menubox.innerHTML += ("<img src = '" + o.thingID + ".png' class = 'menuimage'> ~ " + o.name + " .... $" + o.price.toFixed(2));
    menubox.innerHTML += ("<img src = 'plusicon.png' id='" + o.thingID + "' class = 'addbuttonclass'/>");
    menubox.innerHTML += ("<img src = 'X_Logo.png' id='" + o.thingID + "sub' class = 'subbuttonclass'/><br/>");

    // menubox.innerHTML += ("<span id='" + o.thingID + "' class = 'buttonclass'> + </span>");
    // menubox.innerHTML += ("<span id='" + o.thingID + "sub' class = 'buttonclass'> - </span><br/>");
};

