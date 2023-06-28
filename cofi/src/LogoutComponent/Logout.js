import './Logout.css';
import {useNavigate} from 'react-router-dom'

function Logout() {
  const Navigate=useNavigate();
localStorage.removeItem('token');
localStorage.removeItem('_id');
localStorage.removeItem("name");
localStorage.removeItem("username");
localStorage.removeItem("email");
localStorage.removeItem("password");
localStorage.removeItem("phone");
localStorage.removeItem("address");
localStorage.removeItem("city");
localStorage.removeItem("gender");
localStorage.removeItem("role");
localStorage.removeItem("createdAt");
localStorage.removeItem("updatedAt");
localStorage.removeItem("deletedAt");

  return (<div>
<Navigate to ="/login" />
  </div>
    
  );
}

export default Logout;
