import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
// import { signUp } from "../../store/session";

const MakeReviewForm = ({item}) => {
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState("");
    const [stars, setStars] = useState("");
    const [description, setDescription] = useState("");

    // also need to plug in item_id, user_id, purchase_id



    return (
        <>
        make review form
        </>
    )
}

// const SignUpForm = () => {
//   const [errors, setErrors] = useState([]);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");
//   const user = useSelector((state) => state.session.user);
//   const dispatch = useDispatch();

//   const onSignUp = async (e) => {
//     e.preventDefault();
//     if (password === repeatPassword) {
//       const data = await dispatch(signUp(username, email, password));
//       if (data) {
//         setErrors(data);
//       }
//     }
//   };

//   const updateUsername = (e) => {
//     setUsername(e.target.value);
//   };

//   const updateEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const updatePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const updateRepeatPassword = (e) => {
//     setRepeatPassword(e.target.value);
//   };

//   if (user) {
//     return <Redirect to="/" />;
//   }

//   return (
//     <form className="signup-form" onSubmit={onSignUp}>
//       <div className="create-account">
//         <div className="create-acct-text">Create your account</div>
//         <div className="registration"> Registration is easy</div>
//       </div>

//       <div className="signup-container">
//         <div className="signup-errors">
//           {errors.map((error, ind) => (
//             <div key={ind}>{error}</div>
//           ))}
//         </div>

//         <div className="signup-body">
//           <div className="input-field">
//             <label className="input">User Name</label>
//             <input
//               className="credential"
//               type="text"
//               name="username"
//               onChange={updateUsername}
//               value={username}
//               required
//             ></input>
//           </div>
//           <div className="input-field">
//             <label className="input">Email</label>
//             <input
//               className="credential"
//               type="text"
//               name="email"
//               onChange={updateEmail}
//               value={email}
//               required
//             ></input>
//           </div>
//           <div className="input-field">
//             <label className="input">Password</label>
//             <input
//               className="credential"
//               type="password"
//               name="password"
//               onChange={updatePassword}
//               value={password}
//               required
//             ></input>
//           </div>
//           <div className="input-field">
//             <label className="input">Repeat Password</label>
//             <input
//               className="credential"
//               type="password"
//               name="repeat_password"
//               onChange={updateRepeatPassword}
//               value={repeatPassword}
//               required={true}
//             ></input>
//           </div>
//           <button className="signup-button" type="submit">
//             Sign Up
//           </button>{" "}
//         </div>
//       </div>
//     </form>
//   );
// };

export default MakeReviewForm;
