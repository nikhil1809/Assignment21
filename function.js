var NameandAge = function (Name, Age) { return (Name + "------" + Age); }; //FAT ARROW Function
//function to print values on html page
function myFunction() {
    document.getElementById("print").innerHTML = "Entered Values are " + NameandAge(document.getElementById("firstname").value, document.getElementById("age").value);
}
