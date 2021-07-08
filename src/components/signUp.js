import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../App.css';

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { emailAndPasswordSignUp } = useAuth();
  const { googleLogIn, facebokLogIn } = useAuth();
  const history = useHistory();

  async function formSubmit(event) {
    event.preventDefault();

    await emailAndPasswordSignUp(emailRef.current.value, passwordRef.current.value);
    history.push('/');
  }

  function googleButtonSubmit(event) {
    event.preventDefault();
    googleLogIn();
  }

  function facebookButtonSubmit(event) {
    event.preventDefault();
    facebokLogIn();
  }
  return (
    <div>
      <h1>Welcome to Remember Me!!</h1>
      <p>Guarda tus pensamientos, recordatorios, ideas,
        hasta la lista de mercado en un solo lugar!</p>
      <h2>Regístrate</h2>
      <section>
        <form onSubmit={formSubmit} className='signUpForm'>
          <label className='inputs'>
            Name
            <input type="text" ref={nameRef} required />
          </label>
          <label className='inputs'>
            Email
            <input type="email" ref={emailRef} required />
          </label>
          <label className='inputs'>
            Password
            <input type="password" ref={passwordRef} required />
          </label>
          <button type="submit" >Sign Up</button>
        </form>
        <h2>ó</h2>
        <button onClick={googleButtonSubmit} className='loginSocialMedia'>Continue with Google</button>
        <button onClick={facebookButtonSubmit} className='loginSocialMedia'>Continue with Facebook</button>
        <div>
          Already have an account? <Link to = "/login">LogIn</Link>
        </div>
      </section>
    </div>
  );
}
// const SignUp = () => {
//   const [user, setUser] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordemailError, setPasswordError] = useState('');
//   const [hasAccount, setHasAccount] = useState(false);

//   const signUpEvent = () => {
//     firebaseInit.auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch((err) => {
//         // eslint-disable-next-line default-case
//         switch (err.code) {
//           case 'auth/email-already-in-use':
//           case 'auth/invalid-email':
//             setEmailError(err.message);
//             break;
//           case 'auth/weak-password':
//             setPasswordError(err.message);
//             break;
//         }
//       });
//   };

//   const authListener = () => {
//     firebaseInit.auth.onAuhtStateChanged((userAuth) => {
//       if (userAuth) {
//         setUser(userAuth);
//       } else {
//         setUser('');
//       }
//     });
//   };
// };

// export default SignUp;
