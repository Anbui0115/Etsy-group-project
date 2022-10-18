import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
// import { signUp } from "../../store/session";

const MakeReviewForm = ({item}) => {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState("");
    const [stars, setStars] = useState("");
    const [description, setDescription] = useState("");

    // also need to plug in item_id, user_id, purchase_id

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateStars = (e) => {
        setStars(e.target.value);
    };

    const updateDescription = (e) => {
        setDescription(e.target.value);
    };

    return (
        <form className="make-review-form" >
        <div className="create-account">
            <div className="create-acct-text">Share Your Thoughts!</div>
        </div>

        <div className="signup-container">
            <div className="signup-errors">
            {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
            ))}
            </div>

            <div className="signup-body">
            <div className="input-field">
                <label>Title</label>
                <input
                className="credential"
                type="text"
                name="title"
                onChange={updateTitle}
                value={title}
                required
                ></input>
            </div>
            <div className="input-field">
                <label>Stars</label>
                <input
                className="credential"
                type="text"
                name="stars"
                onChange={updateStars}
                value={stars}
                required
                ></input>
            </div>
            <div className="input-field">
                <label className="input">Description</label>
                <textarea
                type="text"
                name="description"
                onChange={updateDescription}
                value={description}
                required
                ></textarea>
            </div>
            <button className="signup-button" type="submit">
                Sign Up
            </button>{" "}
            </div>
        </div>
        </form>
    )
}

// const SignUpForm = () => {
//   const onSignUp = async (e) => {
//     e.preventDefault();
//     if (password === repeatPassword) {
//       const data = await dispatch(signUp(username, email, password));
//       if (data) {
//         setErrors(data);
//       }
//     }
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
