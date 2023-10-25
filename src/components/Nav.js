
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav class="navbar bg-warning">
            <h4 class="navbar-band" to="/">CRUD operations</h4>
            <div class="nav">
                <Link class="navbar-link mx-3" to="/create-student">Create Student</Link>
                <Link class="navbar-link mx-3" to="/student-list">Student List</Link>
            </div>
        </nav>
    )

}

export default Nav;
