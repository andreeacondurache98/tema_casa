function loadXMLDoc()
{
	  var xhttp=new XMLHttpRequest();
	  xhttp.onreadystatechange=function()
	  {
		  if(this.readyState==4 && this.status==200)
		  {
			  incarcaPosturi(this);
		  }
	  };
	  xhttp.open("GET", "resurse/posturi.xml",true);
	  xhttp.send();
}
function incarcaPosturi(xml)
{
	var i;
	var xmlDoc = xml.responseXML;
	var table = "<tr><th>Nume</th><th>Telespectatori</th><th>Moldova</th><th>Muntenia</th><th>Transilvania</th><th>Dobrogea</th><th>Oltenia</th><th>Banat</th><th>Crisana</th><th>Maramures</th></tr>"; 
    var x = xmlDoc.getElementsByTagName("post");
	for( i = 0;i < x.length; i++){
	   table += "<tr><td>" + 
	   x[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue +
	   "</td><td>" +
	   x[i].getElementsByTagName("telespectatori")[0].childNodes[0].nodeValue +
	   "</td><td>" +
	   x[i].getElementsByTagName("Moldova")[0].childNodes[0].nodeValue +
	   "</td><td>" +
	   x[i].getElementsByTagName("Muntenia")[0].childNodes[0].nodeValue +
	   "</td><td>" +
	   x[i].getElementsByTagName("Transilvania")[0].childNodes[0].nodeValue +
	   "</td><td>" +
	   x[i].getElementsByTagName("Dobrrrogea")[0].childNodes[0].nodeValue +
	   "</td><td>" +
	   x[i].getElementsByTagName("Oltenia")[0].childNodes[0].nodeValue +
	   "</td><td>" +
	   x[i].getElementsByTagName("Banat")[0].childNodes[0].nodeValue +
	   "</td><td>" +
	   x[i].getElementsByTagName("Crisana")[0].childNodes[0].nodeValue +
	   "</td><td>" +
	   x[i].getElementsByTagName("Maramures")[0].childNodes[0].nodeValue +
	   "</td></tr>";
	}
	document.getElementById("post").innerHTML = table;
}