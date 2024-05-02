
export const signUp = (formData) => {
    // Save user details to local storage
    localStorage.setItem('user', JSON.stringify(formData));
    console.log('User signed up:', formData);
  };
  
  export const signIn = (formData) => {
    // Retrieve user details from local storage
    const savedUser = JSON.parse(localStorage.getItem('user'));
    console.log('Saved user:', savedUser);
  
    // Check if the provided credentials match
    if (savedUser && savedUser.email === formData.email && savedUser.password === formData.password) {
      console.log('Authentication successful');
      return true; // Authentication successful
    } else {
      console.log('Authentication failed');
      return false; // Authentication failed
    }
  };
  
  