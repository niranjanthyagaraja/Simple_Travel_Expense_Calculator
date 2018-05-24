   
   function preload(){
	document.getElementById("value").innerHTML = 250;
   }
   function description()
{
	var count=250;
    var desc = document.getElementById("Description").value;
    count = count-desc.length;
    document.getElementById("value").innerHTML = count;
}

function isNumber(event)
{
 var charCode = (event.which) ? event.which : event.keyCode
        if ((charCode >= 97) && (charCode <= 122) || (charCode >= 65) && (charCode <= 90))
            return false;

        return true;
}

function isalpha(event) 
{
            var charCode = (event.which) ? event.which : event.keyCode
        if ((charCode >= 48) && (charCode <= 57))
            return false;

        return true;
}
function check(num)
{
	if (isNaN(num))
	{
		return 0;
	}
	else return num;
}
function total()
{
   var a = document.getElementById("Airline").value;
   var h = document.getElementById("Hotel").value;
   var m = document.getElementById("Meal").value; 
   var t = check(parseFloat(a)) + check(parseFloat(h)) + check(parseFloat(m));
   var n = t.toFixed(2);
   document.getElementById('Total').value = n;
}

function autotab(current,to){
    if (current.getAttribute && 
      current.value.length==current.getAttribute("maxlength")) {
        to.focus() 
        }
}
function present() {
    
    if (document.getElementById('def1').checked){
	
			document.getElementById('Name').value = "Nathen";
			document.getElementById("Name").disabled = true;
			document.getElementById('areacode').value = "217";
			document.getElementById("areacode").disabled = true;
			document.getElementById('suffix').value = "503";
			document.getElementById("suffix").disabled = true;
			document.getElementById('extn').value = "9876";
			document.getElementById("extn").disabled = true;
			document.getElementById('zip').value = "87678";
			document.getElementById("zip").disabled = true;
			document.getElementById('code').value = "9384";
			document.getElementById("code").disabled = true;
			document.getElementById('Description').value = "My first visit to Las Vegas";
			document.getElementById("Description").disabled = true;
			document.getElementById('Airline').value = 400.87;
			document.getElementById("Airline").disabled = true;
			document.getElementById('Hotel').value = 69.98;
			document.getElementById("Hotel").disabled = true;
			document.getElementById('Meal').value = 50;
			document.getElementById("Meal").disabled = true;
			document.getElementById('Total').value = 520.85;
			document.getElementById("Total").disabled = true;
			var length = document.getElementById('Description').value.length;
			document.getElementById("value").innerHTML = 250-length;
		}
		else
		{
	
			document.getElementById('Name').value = "";
			document.getElementById("Name").disabled = false;
			document.getElementById('areacode').value = "";
			document.getElementById("areacode").disabled = false;
			document.getElementById('suffix').value = "";
			document.getElementById("suffix").disabled = false;
			document.getElementById('extn').value = "";
			document.getElementById("extn").disabled = false;
			document.getElementById('zip').value = "";
			document.getElementById("zip").disabled = false;
			document.getElementById('code').value = "";
			document.getElementById("code").disabled = false;
			document.getElementById('Description').value = "";
			document.getElementById("Description").disabled = false;
			document.getElementById('Airline').value = "";
			document.getElementById("Airline").disabled = false;
			document.getElementById('Hotel').value = "";
			document.getElementById("Hotel").disabled = false;
			document.getElementById('Meal').value = "";
			document.getElementById("Meal").disabled = false;
			document.getElementById('Total').value = "";
			document.getElementById("Total").disabled = true;
			document.getElementById("value").innerHTML = 250;
		}
}
function reseter()
{
	document.getElementById("value").innerHTML = 250;
}