ShowOrHide();
function ShowOrHide()
{
    if(document.getElementById("showorhide").style.display=="block")
        {
            document.getElementById("showorhide").style.display="none";
        }
    else
        {
            document.getElementById("showorhide").style.display="block"
        }
}
display();
var Contacts = [];
document.getElementById("add").addEventListener("click", function (){
    var inputs = document.getElementsByTagName("input");
    var name = inputs[0].value ;
    var phone = inputs[1].value ;
    var address = inputs[2].value;
    if(name=="" || phone=="" || address=="")
        window.alert("Un Complete data !")
    else
        {
    var member = {Name:name,Phone:phone,Address:address};
    Contacts.push(member);
    localStorage.setItem("MyContacts",JSON.stringify(Contacts));
    display();
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
}});
function display()
{
    if(JSON.parse(localStorage.getItem("MyContacts"))==null)
        { }
    else
        {
            Contacts=JSON.parse(localStorage.getItem("MyContacts"));
    var rows = "";
    for(var i=0 ; i<Contacts.length ;i++)
    {
        rows = rows+"<tr><td>" +Contacts[i].Name+"</td><td>" +Contacts[i].Phone+"</td><td>"+Contacts[i].Address+"</td></tr>";
    }
document.getElementById("TabData").innerHTML = rows;
        }
}