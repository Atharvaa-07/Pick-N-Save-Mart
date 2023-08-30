export default function authHeader() {
    const token = localStorage.getItem('jwtToken');
    if (token !== null) {
      console.log(token);
       return { Authorization: 'Bearer ' + token }; // for Spring Boot back-end
   
    } else {
      return {};
    }
  }
  