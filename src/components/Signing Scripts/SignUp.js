import React from "react";
import { Form,Link,formData, redirect, useActionData} from "react-router-dom";
import db from "../firebase";
import {doc,setDoc } from 'firebase/firestore/lite';

 export async function Action({request})
{
const data = await request.formData();
const name = data.get("name");const email = data.get("email");const password = data.get("password");
await setDoc(doc(db, "Users",email), {
  name: name,
  email: email,
  password: password,
  balance: 0
});
localStorage.setItem("email",email);
return redirect("/newAccount");

}

export default function SignUp()
{
  

    
  

  return(<div className="Sign">
    <h2>Sign Up</h2>
  <Form method="post">
    <input type="text" placeholder="Name" name="name" />
    <input type="text" placeholder="Email" name="email" />
    <input type="text" placeholder="Password" name="password" />
    <input className="SignUp_submit" type="submit" value="Sign Up" />
  </Form>
  <p>Already have an account? <Link to="/signIn">Login</Link></p>
  </div>)
}