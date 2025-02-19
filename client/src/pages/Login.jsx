import React, { useState } from "react";
import axios from "axios";

function Login () {
  //style
  const inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 ";

  //states
  const initialState = Object.freeze({
    email: "",
    password: "",
  })

  const [formData, setFormData] = useState(initialState)
  console.log(formData);
  
  const HandleChange= (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})}
    const HandleSubmit = async (e) => {
      e.preventDefault();
      try {
       axios.post(
          "http://127.0.0.1:8000/api/signin/",
          formData
        ).then(res => {
          console.log(res.data);
        }
        )
        // window.location.href = "/doctor-dash"
      }
      catch (err) {
        console.log(err);
      };
    }
    

  
    return (
      <>
      <div className="flex justify-center w-[100%] h-[100vh] bg-[#b892f7]">
        <div className="flex flex-col absolute top-[30%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-5 w-[40%] mobile:w-[90%]">
          <text className="text-2xl ">Log in</text>
          <form onSubmit={HandleSubmit}>
 {/* First Name Last Name */}
      <div className="flex mt-7">
            {/* Email */}
            <input
              className={inputStyle + ` mt-2 w-[100%]`}
              name="email"
              type="email"
              placeholder="Email"
              onChange={HandleChange}
              value={formData.email}
              required
            />
          </div>
          {/* Password */}
          <div className="flex mt-7">
            <input
              className={inputStyle + ` w-[100%]`}
              name="password"
              type="password"
              placeholder="Password"
              onChange={HandleChange}
              value={formData.password}
              required
            />
          </div>
          {/* Submit button */}
          <input
            type="Submit"
            className="mt-5 flex justify-center bg-[#8a4af3] text-white font-medium rounded-md p-2 hover:bg-white hover:text-[#8a4af3] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3] ease-linear duration-200"
            value="Log in"
          />
          </form>
         
        </div>
      </div>
      </>
    );
    
}

export default Login
