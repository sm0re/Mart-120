  function validateForm() 
    alert('p')
    var a = document.forms["Form"]["First Name"].value;
    var b = document.forms["Form"]["Last Name"].value;
    var c = document.forms["Form"]["Email"].value;
    var d = document.forms["Form"]["Terms"].value;
    if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "") {
      alert("Please Fill All Required Field");
      return false;
    }
  }