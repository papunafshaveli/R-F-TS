import { Formik } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          dateOfBirth: "",
          password: "",
        }}
        onSubmit={(values) => {}}
      >
        {(props) => (
          <form>
            <label>Name</label>
            <input type="text" name="name" placeholder="Type your name here" />

            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Type your username here"
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Type your Email here"
            />

            <label>Date of Birth</label>
            <ReactDatePicker
              name="dateOfBirth"
              placeholderText="Set your Date of Birth"
              onChange={(date) => {}}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Type your password here"
            />

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
