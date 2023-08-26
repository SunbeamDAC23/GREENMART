<>
<nav class="navbar " style={{backgroundColor:"lightgreen"}} >
  <div class="container-fluid">
    <div class="navbar-header">
    <img className="rounded-circle" src={logo} alt="Cinque Terre" style={{width:'70px',height:'70px'}}/>
    </div>
    <ul class="nav navbar-nav" style={{color:"black"}}>
      <li><a href="/SearchPage"  style={{color:"black"}}>Home</a></li>
      <li><a href="/Viewproduct" style={{color:"black"}}>View Products</a></li>
      <li><a href="/ChangePassword" style={{color:"black"}}>Change Password</a></li>
      <li><a href="/OrderHistory" style={{color:"black"}}>Order History</a></li>
      <li><a href="/" style={{color:"black"}}>LogOut</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
    
    <li><a href="/addproduct">Cart
          <span className="glyphicon glyphicon-shopping-cart" style={{color:"black"}}></span>
        </a></li>
        
    </ul>
  </div>
</nav>

</>