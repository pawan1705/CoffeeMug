import './Login.css';
import  axios from 'axios';
import {useState} from 'react'
import {_apiURLUser} from '../apiURL';
import { useNavigate } from 'react-router-dom';

function Login() {
  const Navigate=useNavigate();
 const[output,setOutput]=useState();
 const[email,setEmail]=useState();
 const [password, setPassword] = useState();
 const handleSubmit=(event)=>{
  event.preventDefault();
  var userDetails={"email":email,"password":password};
  axios.post(_apiURLUser+"login",userDetails).then((response)=>{
    // to store user detail in local storage
    const responseData=response.data.userDetails;
    console.log(responseData);
    localStorage.setItem("token",response.data.token);
    localStorage.setItem("_id",responseData._id);
    localStorage.setItem("name",responseData.name);
    localStorage.setItem("username",responseData.username);
    localStorage.setItem("email",responseData.email);
    localStorage.setItem("password",responseData.password);
    localStorage.setItem("phone",responseData.phone);
    localStorage.setItem("address",responseData.address);
    localStorage.setItem("city",responseData.city);
    localStorage.setItem("gender",responseData.gender);
    localStorage.setItem("role",responseData.role);
    localStorage.setItem("createdAt",responseData.createdAt);
    localStorage.setItem("updatedAt",responseData.updatedAt);
    localStorage.setItem("deletedAt",responseData.deletedAt);

    responseData.role == "admin"? Navigate("/admin"):Navigate("/user");
  }).catch((error)=>{
    setOutput("invalid user or varify your account");
    setEmail('');
    setPassword('');
  });
 }


  return (
    <div>
    {/* content Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
<div class="col-lg-12">
<h2>Login Here!!!</h2>
<font style={{"color":"green"}}>{output}</font>
<form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control"  value={email} onChange={e=>setEmail(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" value={password} onChange={e=>setPassword(e.target.value)} />
    </div>
    <button type="submit" class="btn btn-success">Login</button>
  </form>

</div>
        </div>
    </div>
    {/* content End */}
    </div>
  );
}

export default Login;
