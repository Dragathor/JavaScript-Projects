
function my_Dictionary() { //Creat Dictionary with key value pairs
    var Adventurer = {
        Job:"Wizard", //This will be deleted and "undefigned"
        Race:"Elf",
        Rank:"Silver",
        Status:"Active",
    };
    delete Adventurer.Race;
    document.getElementById("Dictionary").innerHTML = Adventurer.Race;

}