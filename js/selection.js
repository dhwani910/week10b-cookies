function clearSelection(){
    Cookies.remove('selection');
    window.open("index.html", "_self");
}



var userSelection = Cookies.get('selection');

if(userSelection == 'orange-juice'){
    document.getElementById('selection-container').innerHTML = "<p> orange juice </p>";

}
else if(userSelection == 'pop'){
    document.getElementById('selection-container').innerHTML = "<p> pop </p>";

}
else if(userSelection == 'blue-berry'){
    document.getElementById('selection-container').innerHTML = "<p> blue berry </p>";

}
else{
    document.getElementById('selection-container').innerHTML = "<p> something went wrong </p>";
}
