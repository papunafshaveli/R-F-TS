import { Formik } from "formik";
import ReactDatePicker from "react-datepicker";
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
    <div className="App">
      <Formik<FormModel>
        initialValues={{
          name: "",
          username: "",
          email: "",
          dateOfBirth: undefined,
          password: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({ handleSubmit, values, handleChange, setFieldValue }) => {
          const dateOnChange = (date: Date | null) => {
            setFieldValue("dateOfBirth", date);
          };
          return (
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Type your name here"
                value={values.name}
                onChange={handleChange}
              />

              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Type your username here"
                value={values.username}
                onChange={handleChange}
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Type your Email here"
                value={values.email}
                onChange={handleChange}
              />

              <label>Date of Birth</label>
              <ReactDatePicker
                name="dateOfBirth"
                placeholderText="Set your Date of Birth"
                value={values.dateOfBirth?.toLocaleDateString()}
                selected={values.dateOfBirth}
                onChange={dateOnChange}
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Type your password here"
                value={values.password}
                onChange={handleChange}
              />

              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
