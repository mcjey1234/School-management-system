function check()
{
	dom = document.addcourseform
	
	if(dom.cource_name.value=="")
	{
		alert("Plese Enter Course Name.");
		dom.name.focus();
		return false;
	
	}
	if(dom.intake.value=="")
	{
		alert("Plese Enter Intake.");
		dom.intake.focus();
		return false;
	
	}
	if (IsNumeric(dom.intake.value) == false) 
    {
      alert("Intake value should be non Alphebetic");
	  dom.intake.focus();
	  return false;
      }
	  if(dom.duration.value=="")
	{
		alert("Plese Enter Duration.");
		dom.duration.focus();
		return false;
	
	}
	if (IsNumeric(dom.duration.value) == false) 
    {
      alert("Duration value should be non Alphebetic");
	  dom.duration.focus();
	  return false;
    }
	  if(dom.fees.value=="")
	{
		alert("Plese Enter Fees (/Annum).");
		dom.fees.focus();
		return false;
	
	}	
	if(dom.userfile.value=="")
	
	{
		alert("Plese Choose Syllabus file to be upload...");
		dom.userfile.focus();
		return false;
	
	}
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

