document.getElementById("fToC").addEventListener("click", function()
{
    var temp = document.getElementById("f1").value;

    convertFtoC(temp);
})

document.getElementById("cToF").addEventListener("click", function()
{
    var temp = document.getElementById("c2").value;

    convertCtoF(temp);
})


function convertFtoC(num)
{
    var final = fahrenheitToCelsius(num)
    document.getElementById("c1").value = final;
}

function convertCtoF(num)
{
    var final = celsiusToFahrenheit(num)
    document.getElementById("f2").value = final;
}