var NameandAge = function (Name, Age) { return (Name +"------"+ Age); };//FAT ARROW Function
//function to print values on html page
function myFunction() {
    document.getElementById("print").innerHTML = "Entered Values are " + NameandAge(<HTMLInputElement>document.getElementById("firstname").value, <HTMLInputElement>document.getElementById("age").value);
}
