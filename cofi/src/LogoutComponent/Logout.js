import './Logout.css';


function Logout() {


  return (
    <div>
    {/* content Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
<div class="col-lg-12">
<h2>Login Here!!!</h2>
<font style={{"color":"green"}}></font>
<form >
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control"  />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" />
    </div>
    <button type="submit" class="btn btn-success">Logout</button>
  </form>

</div>
        </div>
    </div>
    {/* content End */}
    </div>
  );
}

export default Logout;
