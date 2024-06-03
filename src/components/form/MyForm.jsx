import useForm from "./useForm";

const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Paswword must be at least 6 characters";
  }
  return errors;
};

const MyForm = () => {
  const { values, errors, handleChange, handSubmit, isSubmitting, response } =
    useForm({ email: "", password: "" }, validate);

  return (
    <form onSubmit={handSubmit}>
      <div>
        <h2>React Form</h2>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
      {isSubmitting && <p>Submitting..</p>}
      {errors.submit && <p>{errors.submit}</p>}
      {response && (
        <p>Form Submitted succesfully: {JSON.stringify(response)}</p>
      )}
    </form>
  );
};

export default MyForm;
