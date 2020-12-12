
// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBhjuf2GdnyGRMIWPuF3xmDzt-GAjm2XfY",
    authDomain: "competition-b1544.firebaseapp.com",
    databaseURL: "https://competition-b1544-default-rtdb.firebaseio.com",
    projectId: "competition-b1544",
    storageBucket: "competition-b1544.appspot.com",
    messagingSenderId: "542151093245"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');

    var email = getInputVal('email');
    var password = getInputVal('password');
   
  
    // Save message
    saveMessage(name, email, password);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email,password){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      password:password,
      
    
    });
  }