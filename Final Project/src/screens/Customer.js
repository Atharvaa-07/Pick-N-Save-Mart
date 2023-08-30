
import AuthService from '../api/auth.service'
import CustomerManu from '../components/CustomerManu';
import ViewProfile from '../components/ViewProfile';


const Customer=()=>{
    const user= AuthService.getCurrentUser();
    return <div>
        <div className="container">
        <CustomerManu/>
        <ViewProfile/>
        </div>
   
    
   
    </div>
       
}

export default Customer;