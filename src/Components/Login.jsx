import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const { login, GoogleSignin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    login(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : '/');
        console.log(result)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You have successfully logged in",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please provide a valid email and password",
            showConfirmButton: false,
            timer: 1500
          });
      });
  };

  const googleLogin = (e) => {
    e.preventDefault();
    GoogleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl text-center font-bold my-5">Please login</h2>
        <form onSubmit={handleLogin} className="my-10 md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>

        <div onClick={googleLogin} className="py-5">
          <Link to="#">
            <button className="p-3 rounded-xl bg-red-500 text-white">Google Sign In</button>
          </Link>
        </div>
        <p className="my-5">
          Do not have an Account?
          <Link className="text-red-500 text-lg font-semibold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
