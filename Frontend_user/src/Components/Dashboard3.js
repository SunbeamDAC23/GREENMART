

function Dashboard3()
{
return(
<div class="dropdown show">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Category
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {
            category.map((cat) => {
              return (
                <Link className="nav-link" onClick={() => { showProducts(cat['id']) }} >{cat['cname']}</Link>
              )
            })
          }
        </div>
      </div>
)
} 
export default Dashboard3;