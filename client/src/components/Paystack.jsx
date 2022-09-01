import React, { useState } from "react";
import "./Paystack.css";
import { PaystackButton } from 'react-paystack'

const Paystack = () => {
	const publicKey = "pk_your_public_key_here"
	const amount = 1000000
	const [email, setEmail] = useState("hello")
	const [name, setName] = useState("hello")
	const [phone, setPhone] = useState("hello")
  
	const componentProps = {
	  email,
	  amount,
	  metadata: {
		name,
		phone,
	  },
	  publicKey,
	  text: "Pay Now",
	//   onSuccess: () =>
	// 	alert("Thanks for doing business with us! Come back soon!!"),
	//   onClose: () => alert("Wait! Don't leave :("),
	}
	// Setting config object to a state to dynamically capture info from Form
	



	return (
		<>
			<div className="my-header text-center">
				<h5>Paystack in React Demo</h5>
			</div>
			<div className="container">
				<div className="row mt-5">
					<div className="col-sm-4 mx-auto my-form text-center">
						<form >
							<div className="mb-3">
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Enter Name"
									required
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="mb-3">
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Enter Email"
									required
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
							<div className="mb-3">
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Enter Email"
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="mb-3">
								{amount}
							</div>
							<div>
								<button type="submit">Pay Now</button>
							</div>
						</form>
						<PaystackButton {...componentProps} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Paystack;