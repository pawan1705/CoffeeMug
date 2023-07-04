import './ManageUser.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {_apiURLUser} from '../apiURL.js'

function ManageUser() {
  const[userDetail,setUserDetail]=useState([]);
  useEffect(()=>{
    axios.get(_apiURLUser+"fetch?role=user").then((result)=>{
      setUserDetail(result.data);
    })
  },[])

  const manageUserStatus=(_id,s)=>{
    var updateDetails;
    if(s=="verify"){
      updateDetails={"condition":{"_id":_id},"set":{"status":1}}
      axios.patch(_apiURLUser+"update",updateDetails).then((result)=>{
        window.location.reload();
      })
    }
    else if (s=="block")
    {
updateDetails={"condition":{"_id":_id},"set":{"status":0}};
axios.patch(_apiURLUser+"update",updateDetails).then((result)=>{
  window.location.reload();
})
    }
    else
    {
      axios.delete(_apiURLUser+"delete/"+_id).then((result)=>{
        window.location.reload();
      })
    }
  }
  return (<div class="header_section">
  <div class="container-fluid">
     <nav class="  bg-warning">
          {/* start */}
          <div class="container-fluid px-5 d-none d-lg-block">
   <div class="row gx-5">
       <div class="col-lg-12 text-center py-3">
           <div class="d-inline-flex align-items-center">
               <div class="text-start">
                   <h6 class="text-uppercase fw-bold">Manage User</h6>
        <table className='table table-bordered'>
        <tr>
          <th>User Id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Password</th>
          <th>Phone</th>
          <th>Address</th>
          <th>City</th>
          <th>Gender</th>
          <td>createAt</td>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {
    userDetail.map((row) => (
        <tr>
        <td>{row._id}</td>
        <td>{row.name}</td>
        <td>{row.username}</td>
        <td>{row.email}</td>
        <td>{row.password}</td>
        <td>{row.phone}</td>
        <td>{row.address}</td>
        <td>{row.city}</td>
        <td>{row.gender}</td>
        <td>{row.createdAt}</td>
        <td>
    {row.status == 0 &&
        <a style={{"color":"green"}} onClick={()=>{manageUserStatus(row._id,"verify")}} >Verify User</a>
    }
    {row.status == 1 &&
        <a style={{"color":"orange"}} onClick={()=>{manageUserStatus(row._id,"block")}} >Block User</a>
    }
        </td>
    <td><a style={{"color":"red"}} onClick={()=>{manageUserStatus(row._id,"delete")}} >Delete User</a></td>
        </tr>
    ))
}
        </table>
               </div>
           </div>
       </div>
   </div>
</div>
          {/* end */}
     </nav>
  </div>
</div>
  );
}

export default ManageUser;
