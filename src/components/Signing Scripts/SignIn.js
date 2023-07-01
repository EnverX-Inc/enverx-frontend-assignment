import React from "react";
import { Form,Link,formData, redirect, useActionData } from "react-router-dom";
import db from "../firebase";
import {doc,getDoc} from 'firebase/firestore/lite';

export async function action({request})
{
  const req_data = await request.formData();
  const email = req_data.get("email");const password=req_data.get("password");
  const data =  (await getDoc(doc(db,'Users',localStorage.getItem("email")))).data()
  const email_db = data.email;const password_db=data.password;

  if(email===email_db && password===password_db){return redirect("/account")}

  return true;
}

export default function SignIn()
{ const val = useActionData();
  return(<div className="Sign">

<h2>Login</h2>
<Form method="post">
<input type="text" placeholder="Email" name="email" />
<input type="text" placeholder="Password" name="password" />
<input className="SignUp_submit" type="submit" value="Sign In" />
</Form>
{val && <h5>You have entered the wrong credentials.</h5>}
<p>Don't have an account yet? <Link to="/signUp">Sign Up</Link></p>

  </div>)
}
