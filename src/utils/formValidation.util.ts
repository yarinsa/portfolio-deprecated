const nameValidation = (
  fieldName: string,
  fieldValue: string
): string | null => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -][^א-ת]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 2) {
    return `${fieldName} needs to be at least two characters`;
  }
  return null;
};

const phoneValidation = (
  fieldName: string,
  fieldValue: string
): string | null => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/^[+]*[]{0,1}[0-9]{1,4}[]{0,1}[-\s\./0-9]*$/.test(fieldValue)) {
    return "Invalid Phone number";
  }
  return null;
};

const emailValidation = (email: string): string | null => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === "") {
    return "Email is required";
  }
  return "Please enter a valid email";
};

const formValidation = {
  email: emailValidation,
  name: nameValidation,
  phone: phoneValidation,
};

export default formValidation;
