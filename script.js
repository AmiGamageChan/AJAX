function m() {
    var x1 = document.getElementById("x").value;
    var y1 = document.getElementById("y").value;

    var request = new XMLHttpRequest();

    request.open("GET", "process.php?x=" + x1 + "&y=" + y1, true);
    request.send();

    request.onreadystatechange = function(){
        if(request.readyState === 4 & request.status === 200){
            document.getElementById("d").innerHTML = request.responseText;
        }
    };


}
