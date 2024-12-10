// Javascript Document 

function check()
{
	dom = document.feedbackfrm
	
	if(dom.fname.value=="")
	{
		alert("Plese Enter First Name.");
		dom.fname.focus();
		return false;
	
	}

	if(isAlphabetic(dom.fname.value))
	{
		alert("First Name should be Non Numeric.");
		dom.fname.focus();
		return false;
	}
	
	if(dom.lname.value=="")
	{
		alert("Plese Enter Last Name.");
		dom.lname.focus();
		return false;
	
	}

	if(isAlphabetic(dom.lname.value))
	{
		alert("Last Name should be Non Numeric.");
		dom.lname.focus();
		return false;
	}	
			
	if(dom.age.value=="")
	{
		alert("Plese Enter your Age.");
		dom.age.focus();
		return false;
	
	}
	if (IsNumeric(dom.age.value) == false) 
      {
      alert("Age should be non Alphabetic.");
	  dom.age.focus();
	  return false;
      }
	
	if(dom.city.value=="")
	{
		alert("Plese Enter City.");
		dom.city.focus();
		return false;
	
	}
	if(isAlphabetic(dom.city.value))
	{
		alert("City should be Non Numeric.");
		dom.city.focus();
		return false;
	}
	
	if(dom.state.value=="")
	{
		alert("Plese Enter State.");
		dom.state.focus();
		return false;
	
	}
	if(isAlphabetic(dom.state.value))
	{
		alert("State  Name should be Non Numeric.");
		dom.state.focus();
		return false;
	}
	if(dom.country.value=="")
	{
		alert("Plese Enter Country.");
		dom.country.focus();
		return false;
	
	}
	if(isAlphabetic(dom.country.value))
	{
		alert("Country should be Non Numeric.");
		dom.country.focus();
		return false;
	}
	if(dom.phone.value=="")
	{
		alert("Plese Enter Phone.");
		dom.phone.focus();
		return false;
	
	}
	if (IsNumeric(dom.phone.value) == false) 
    {
      alert("Phone no. should be non Alphebetic.");
	  dom.phone.focus();
	  return false;
    }
	if(dom.fax.value=="")
	{
		alert("Plese Enter Fax.");
		dom.fax.focus();
		return false;
	
	}
	if (IsNumeric(dom.fax.value) == false) 
    {
      alert("Fax should be non Alphebetic.");
	  dom.fax.focus();
	  return false;
    }
	if(dom.email.value=="")
	{
		alert("Plese Enter E-Mail Id. ");
		dom.email.focus();
		return false;
	
	}
	if(emailcheck(dom.email.value))
	{
		alert("Please Enter Correct E-Mail.");
		dom.email.focus();
		return false;
	}
	if(dom.comments.value=="")
	{
		alert("Plese Enter Your Comments.");
		dom.comments.focus();
		return false;
	
	}

	
}

function emailcheck(email) 	                                        
	{                                                                       
																	
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
		{                                                               
		return false;                                           
		}                                                               
		return true;                                                    
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



function isInteger(s)
{
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}



function isAlphabetic(val)
{
	if (val.match(/[a-zA-Z]+$/))
	{
	return false;
	}
	else
	{
	return true;
	} 
}



