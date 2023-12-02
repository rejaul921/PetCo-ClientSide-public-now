import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

    // Password validation expression
    const passwordExpression = /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;

    if (!passwordExpression.test(password)) {
        Swal.fire("Password must have a special character, a capital letter, and be at least 6 characters long.");
      return;
    }

    createUser(email, password, name, photo)
      .then((createdUser) => {
        console.log(createdUser.user);
        const aUser=createdUser.user
        const user={...aUser, isAdmin:false}
        fetch('https://petco-server.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)

          })
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "YSuccessfully created a user",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "User already exists",
            showConfirmButton: false,
            timer: 1500
          });
      });
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl text-center font-bold my-5">Please Register</h2>
        <form onSubmit={handleRegister} className="my-10 md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo url</span>
            </label>
            <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" />
          </div>
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
            <p className="text-s text-red-700 mt-1">
              Password must have a special character, a capital letter, and be at least 6 characters long.
            </p>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
        <p className="my-5">
          Already have an Account?{' '}
          <Link className="text-green-700 text-lg font-semibold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
