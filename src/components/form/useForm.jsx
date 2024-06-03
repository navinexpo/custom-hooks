import { useState } from "react";

const useForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validatoionError = validate(values);
    setErrors(validatoionError);
    if (Object.keys(validatoionError).length === 0) {
      setIsSubmitting(true);
      try {
        const res = await fetch("https://api.exam.com/submit", {
          method: "POST",
          headers: {
            "Content-type": "application/type",
          },
          body: JSON.stringify(values),
        });

        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    response,
  };
};

export default useForm;
