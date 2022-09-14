import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
  const navigate = useNavigate();
  
  const currentUser = localStorage.getItem("user") || false
    const logOut = () => {
        localStorage.clear()
        navigate("/login")
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <h4>Bilisim School</h4> 
          </Link>
          <div className="d-flex text-white align-items-center ">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize">
                  {currentUser}
                </h5>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={logOut}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => navigate('/register')}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
