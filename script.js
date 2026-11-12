function addEmployee() {
    let name = document.getElementById("name").value;
    if(name === "") {
        alert("Please enter a name");
        return;
    }
 let result = document.getElementById("result");
     document.getElementById("result").innerHTML += "Result: " + name + "<br>"; 
}