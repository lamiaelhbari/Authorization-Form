import React, { useState } from 'react';

// Contact function component that handles authentication
function Contact() {
  // Correct password to authorize access
  const password = 'swordfish';
  
  // Initial state for authorization (not authorized)
  const [authorized, setAuthorized] = useState(false);

  // Function to handle form submission
  function handleSubmit(e) {
    // Prevents page reload on form submission
    e.preventDefault();
    
    // Gets the entered password from the input field
    const enteredPassword = e.target.querySelector('input[type="password"]').value;
    
    // Checks if the entered password matches the correct password
    const auth = enteredPassword === password;
    
    // Updates the authorization state
    setAuthorized(auth);
  }

  // 4. Declaration of the login form in a `login` variable
  const login = (
    <form action="#" onSubmit={handleSubmit}>
      {/* Input field for entering the password */}
      <input type="password" placeholder="Password" />
      
      {/* Button to submit the form */}
      <input type="submit" />
    </form>
  );  

  // 6. Declaration of contact information in a `contactInfo` variable
  const contactInfo = (
    <ul>
      <li>client@example.com</li>
      <li>555.555.5555</li>
    </ul>
  );

  return (
    <div id="authorization">
      {/* 2. Conditional title based on authorization state */}
      <h1>{authorized ? "Contact" : "Enter the Password"}</h1>
      
      {/* 7. Ternary operator to display `contactInfo` if authorized, otherwise `login` */}
      {authorized ? contactInfo : login}
    </div>
  );
}

export default Contact;
