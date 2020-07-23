function byCompany() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchCompany");
    filter = input.value.toUpperCase();
    table = document.getElementById("customersTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function byContact() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchContact");
    filter = input.value.toUpperCase();
    table = document.getElementById("customersTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  
  function searching(){
      if (document.getElementById('searchCompany').style.display == 'inline' && document.getElementById('searchContact').style.display == 'none') {
        byCompany();
        byContact();  
        document.getElementById('searchCompany').style.display = 'none';
        document.getElementById('searchContact').style.display = 'inline';
        document.getElementById('searchCompany').value = '';
        document.getElementById('searchContact').value = '';
      } else {
        byContact();
        byCompany();
        document.getElementById('searchCompany').style.display = 'inline';
        document.getElementById('searchContact').style.display = 'none';
        document.getElementById('searchCompany').value = '';
        document.getElementById('searchContact').value = '';
      }      
  }