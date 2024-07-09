import React, { useState, useEffect } from "react";

export default function NewForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      setError("All fields are required!");
    } else {
      setError("");
      if (formData.name.length < 3) {
        setError("must have 4 char");
      } else {
        setError("");
      }
      if (/^[^0-9]*$/.test(formData.name)) {
        setError("");
      } else {
        setError("invalid");
      }
    }
  };
  const handleChange = async (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className=""
          type="text"
          id="name"
          value={formData?.name}
          placeholder="Name..."
          onChange={handleChange}
        />
        <input
          className=""
          type="email"
          id="email"
          value={formData?.email}
          placeholder="Email..."
          onChange={handleChange}
        />
        <input
          className=""
          type="password"
          id="password"
          value={formData?.password}
          placeholder="Password..."
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="border border-black cursor-pointer p-2"
        />
      </form>
      {error ? <p className="text-red-500">{error}</p> : ""}
    </div>
  );
}
