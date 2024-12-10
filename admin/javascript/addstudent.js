function check()
{
	dom = document.addstudent
	
	if(dom.id.value=="")
	{
		alert("Plese Enter ID Number.");
		dom.id.focus();
		return false;
	
	}
	if(dom.name.value=="")
	{
		alert("Plese Enter Name.");
		dom.name.focus();
		return false;
	
	}
	
   if(dom.standard.value=="")
	{
		alert("Plese Enter Standard.");
		dom.standard.focus();
		return false;
	
	}
	
function IsNumeric(strString)
   //  check for valid numeric strings	
   {
   var strValidChars = "0123456789.-";
   var strChar;
   var blnResult = true;

   if (strString.length == 0) return false;

   //  test strString consists of valid characters listed above
   for (i = 0; i < strString.length && blnResult == true; i++)
      {
      strChar = strString.charAt(i);
      if (strValidChars.indexOf(strChar) == -1)
         {
         blnResult = false;
         }
      }
   return blnResult;
   }

