import { Formik } from "formik";

import { ErrorMessage } from "formik";

import { Field } from "formik";

import { Form } from "formik";




const validateEmail = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );


function AppFormik(){
    return (
        <Formik
            initialValues={{
                 fullName:"",
                 emailId:"",
            }}

           validate={(values) => {
              const errors ={};
              if(values.fullName.length <=5){
                 errors.fullName ="full name should be atleast 6 characters";
              }else if (values.emailId.length <=5){
                 errors.emailId="email id should be atleast 6 characters";
              }else if(!validateEmail.test(values.emailId)){
                 errors.emailId="email is invalid";
              }
              return errors;
           }}
         
           onSubmit ={(values) => {
             console.log("form submitted");
             console.log(values);
           }}

        >
            {() => {
                return (
                   <>
                       <p>job application</p>
                       <Form>
                           <div>
                               <label>full name : </label>
                               <Field name ="fullName" type="text"/>
                               <ErrorMessage name="fullName"/>
                           </div>
                           <br/>
                           <div>
                               <label>Email id : </label>
                               <Field name ="emailId" type="email"/>
                               <ErrorMessage name="emailId"/>
                           </div>
                           <br/>
                           <div>
                            <button type="submit">submit</button>
                           </div>
                       </Form>
                   </>
                )   
           }}



        </Formik>

    )
}








export default AppFormik;