function loadXMLDoc()
{
	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			incarcaPersoane(this);
		}
	};
	xhttp.open("GET", "resurse/persoane.xml",true);
	xhttp.send();
}
function incarcaPersoane(xml)
{
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>NumePost</th><th>Telespectatori</th><th>Dobrogea</th><th>Moldova</th><th>Muntenia</th><th>Transilvania</th><th>Oltenia</th></tr>"; 
    var x = xmlDoc.getElementsByTagName("persoana");
     for( i = 0;i < x.length; i++){
         table += "<tr><td>" + 
         x[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue +
         "</td><td>" +
         x[i].getElementsByTagName("prenume")[0].childNodes[0].nodeValue +
         "</td><td>" +
         x[i].getElementsByTagName("varsta")[0].childNodes[0].nodeValue +
         "</td><td>" +
         x[i].getElementsByTagName("moldova")[0].childNodes[0].nodeValue +
         "</td><td>" +
         x[i].getElementsByTagName("muntenia")[0].childNodes[0].nodeValue +
         "</td><td>" +
         x[i].getElementsByTagName("transilvania")[0].childNodes[0].nodeValue +
         "</td><td>" +
         x[i].getElementsByTagName("oltenia")[0].childNodes[0].nodeValue +
         "</td></tr>";
     }
     document.getElementById("persoana").innerHTML = table;
}