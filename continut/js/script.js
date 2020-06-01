function schimbaContinut(pagina, jsFisier, jsFunctie)
{
	var xmlhttp;
	if(window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = 
		function()
		{
			if(xmlhttp.readyState == 4 && xmlhttp.status)
			{
				document.getElementById("continut").innerHTML = xmlhttp.responseText;
				if (jsFisier) {
					var elementScript = document.createElement('script');
					elementScript.onload = function () {
						console.log("hello");
						if (jsFunctie) {
							window[jsFunctie]();
						}
					};
					elementScript.src = jsFisier;
					document.head.appendChild(elementScript);
				} else {
					if (jsFunctie) {
						window[jsFunctie]();
					}
				}
			}
		}
	}
	xmlhttp.open("GET",pagina,true);
	xmlhttp.send();
}
function myFunction(imgs) {
	var expandImg = document.getElementById("expandedImg");
	var imgText = document.getElementById("imgtext");
	expandImg.src = imgs.src;
	imgText.innerHTML = imgs.alt;
	expandImg.parentElement.style.display = "block";
  }

  