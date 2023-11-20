import { Formik } from "formik";
import RegitrationForm from "./RegitrationForm";

import "react-datepicker/dist/react-datepicker.css";

type FormModel = {
  name: string;
  username: string;
  email: string;
  dateOfBirth: Date | undefined;
  password: string;
};

function App() {
  return (
    <div>
      <h1>Registration form</h1>
      <Formik<FormModel>
        initialValues={{
          name: "",
          username: "",
          email: "",
          dateOfBirth: undefined,
          password: "",
        }}
        onSubmit={(values) => {
          alert("This is your regitration data" + JSON.stringify(values));
        }}
        component={RegitrationForm}
      />
    </div>
  );
}

export default App;
