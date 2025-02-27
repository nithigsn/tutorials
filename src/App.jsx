import { useState } from "react";

const FormWithErrorPlaceholder = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      setEmail(""); // Clear input so placeholder shows
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format");
      setEmail(""); // Clear input so placeholder shows
    } else {
      setError(""); // Clear error if valid
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={error ? "" : email} // If error exists, show placeholder instead of value
        onChange={(e) => {
          setEmail(e.target.value);
          setError(""); // Clear error when typing
        }}
        placeholder={error || "Enter your email"} // Show error in placeholder
        className={`border p-2 w-full ${error ? "border-red-500" : "border-gray-300"}`}
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2">Submit</button>
    </form>
  );
};

export default FormWithErrorPlaceholder;
