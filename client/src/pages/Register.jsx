import React, { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

function Register () {
  //style
  const inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 min-w-0";

  const buttonStyle = "mt-5 flex justify-center bg-[#8a4af3] text-white font-medium rounded-md p-2 ease-linear duration-200"
  const activeButtonStyle = ' hover:bg-white hover:text-[#8a4af3] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3] cursor-pointer'
  const disableButtonStyle = ' opacity-50'
  //states
  const initialState = Object.freeze({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
   
  });
  const confirmpassword = Object.freeze({
    errors: {
      confirm: false,
    },
  })

  const [formData, setFormData] = useState(initialState)
  console.log(formData);
  const [formData2, setFormData2] = useState(confirmpassword)
  console.log(formData);
  useEffect(()=>{
    checkPass()
  },[formData.confirm])
  const checkPass = () => {
    if(formData.password === formData.confirm)
    {
        setFormData2({...confirmpassword, errors : {confirm : false}})
    }
    else
    {
      setFormData2({...confirmpassword, errors : {confirm : true}})
      ;
    }
}

  const HandleChange= (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
   
  }
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
     axios.post(
        "http://127.0.0.1:8000/api/signup/",
        formData
      ).then(res => {
        console.log(res.data);
      }
      )
      window.location.href = "/"
    }
    catch (err) {
      console.log(err);
    };
  }

 
    return (
      <div className="flex justify-center w-[100%] h-[100vh] bg-[#b892f7]">
        <div className="flex flex-col absolute top-[20%] shadow-lg border-silver border-[2px] bg-white rounded-lg p-5 mobile:w-[90%]">
          <text className="text-2xl ">REGISTER</text>
          <form onSubmit={HandleSubmit}>
          {/* First Name Last Name */}
          <div className="flex mt-7 w-auto">
            <input
              className={inputStyle + ` mr-3`}
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={HandleChange}
              value={formData.firstName}
              required
            />
            <input
              className={inputStyle}
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={HandleChange}
              value={formData.lastName}
            />
          </div>

          {/* Email */}
          <input
            className={inputStyle + ` mt-7 mobile:w-[100%]`}
            name="email"
            type="email"
            placeholder="Email"
            onChange={HandleChange}
            value={formData.email}
            required
          />
          {/* Password */}
          <div className="flex mt-7">
            <input
              className={inputStyle + ` mr-3`}
              name="password"
              type="password"
              placeholder="Password"
              onChange={HandleChange}
              value={formData.password}
              required
            />
            <input
              className={inputStyle}
              name="confirm"
              type="password"
              placeholder="Confirm Password"
              onChange={HandleChange}
              value={formData.confirm}
              required
            />
          </div>   
          <div className="flex justify-center">
            <span className="flex-1 mr-3"></span>
            <span className="flex-1 text-red-500">
              {formData2.errors.confirm}
            </span>
          </div>
          {/* Submit button */}
          <input
            type="Submit"
            className={(formData2.errors.confirm)? buttonStyle+disableButtonStyle: buttonStyle+activeButtonStyle}
            value="Sign up"
          />
           </form>
        </div>
      </div>
    );
  }

export default Register;
