let percentages = document.querySelectorAll(".percentInput");
let percentagesArr = Array.from(percentages);
// let sumP = percentagesArr.reduce((a, b) => a + b, 0);

alert(percentagesArr[0]);

// Update percent total
// let log = document.getElementById("count");

// input.addEventListener("log", updateValue);

// function updateValue(e) {
//     log.textContent = "Total allocation: " + (e.target.value);
// }


var assetType = [

    "stocks", "treasury bonds", "corporate bonds", "gold", "cryptocurrency"

];

// var percentages = [

//     (document.getElementById("stocks").value) / 100,
//     (document.getElementById("tBonds").value) / 100,
//     (document.getElementById("cBonds").value) / 100,
//     (document.getElementById("gold").value) / 100,
//     (document.getElementById("crypto").value) / 100

// ];

function allocate() {

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    var total = document.getElementById("total").value;
    if (total <= 0) {
        alert("Please enter a valid investment amount.");
        return;
    }

    if (sumP < 1) {
        var choice = confirm("Warning: You've only allocated " + sumP * 100 + "% of your " + formatter.format(total) + ". Continue?");
        if (choice == false) {
            return;
        }
    }
    else if (sumP > 1) {
        alert("You've entered a total of " + (sumP * 100).toFixed(2) + "%. Please reduce your allocations by " + ((sumP -1) * 100).toFixed(2) + "%.");
        return;
    }

    document.getElementById("results").innerHTML ="";

    for (i in percentages) {
        if (percentages[i] == "") {
            continue;
            }
        else {
            var allocation = total * percentages[i];
            var node = document.createElement("LI");
            node.innerHTML = "Your allocation to " + assetType[i] + " is: " + formatter.format(allocation);
            document.getElementById("results").appendChild(node);
        }
    }
}