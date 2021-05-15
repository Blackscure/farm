 /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Chart 
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['jan', 'feb', 'march', 'apr', 'may', 'jun', 'jul','aug','sep','oct','nov','dec'],
        datasets: [{
            //label: '# of Votes',
            data: [1, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}); 

/******Register****** */

function registerUser() {
    var Firstname = document.getElementById("fname").value;
    var Lastname = document.getElementById("lname").value;
    var Email = document.getElementById("email").value;
    var Mobile = document.getElementById("phone").value;
    var Password = document.getElementById("password").value;
    var Confirmpass = document.getElementById("conpassword").value;

      db = window.openDatabase("farm", "2.0", "farmDB", 2*1024*1024);
      db.transaction(function(tx) {
       NewUser(Mobile, Firstname, Lastname, Email, Password, Confirmpass);
       }, errorRegistration, successRegistration);
       }

       function NewUser(txt,Firstname, Lastname, Email, Password, Confirmpass) {
       var _Query = ("INSERT INTO farm(UserName, FirstName, LastName, Email, Password, CPass) values ('"+ Mobile +"','"+ Firstname +"','"+ Lastname +"','"+ Email +"', '"+ Password +"', '"+ Confirmpass +"')");
        alert(_Query);
        tx.executeSql(_Query);
        }
        function errorRegistration(error) {
     navigator.notification.alert(error, null, "Got an error mate", "cool");
         }
        function successRegistration() {
        navigator.notification.alert("User data has been registered", null, "Information", "ok");
          $( ":mobile-pagecontainer" ).pagecontainer( "change", "#page4" );
      }

/****Sign in*****/

const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById("form")
const erroeElement = document.getElementById('error')


form.addEventListener('button', (e) => {
    let messages = []
    if(email.value === '' || email.value == null) {
        messages.pus('The email or password you enterd is incorrect. Try again')
    }

    if (messages.length > e) {
        e.preventDefault
        errorrElement.innerText = messages.join(',')
    }
    e.preventDefault()
})




