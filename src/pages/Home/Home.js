import React, { useState } from "react";
import InputForm from "../../components/Input/InputForm";

import "./styles.css";
import { Stack } from "@chakra-ui/react";
import ButtonForm from "../../components/Button/ButtonForm";

function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser([firstName + lastName + email]);
    console.log(user);
  };

  return (
    <div className="container">
      <form className="home-container" onSubmit={handleSubmit}>
        <div className="names">
          <Stack spacing={2}>
            <InputForm
              className="firstName"
              name="firstName"
              value={firstName}
              onChange={handleFirstName}
              label="Fist Name"
              placeholder="Yudi"
            />
            <InputForm
              name="lastName"
              value={lastName}
              onChange={handleLastName}
              label="Last Name"
              placeholder="Kojima"
            />
          </Stack>
        </div>
        <div className="email">
          <InputForm
            name="email"
            value={email}
            onChange={handleEmail}
            label="Email"
            placeholder="yudikojima@email.com"
          />
        </div>
        <div className="button">
          <ButtonForm type="submit" onCLick={handleSubmit} />
        </div>
      </form>
      <div className="card">
        <h2>Monthly Signature</h2>
        <div className="price">
          <p>You will pay</p>
          <span>R$ 299.90</span>
        </div>
        <div className="description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit odit molestiae distinctio tempora architecto qui. Sed
            sit tempora, quos eaque eligendi architecto et libero fugiat
            necessitatibus quidem. Voluptatum, beatae hic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
