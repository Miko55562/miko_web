// AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <section style={aboutStyle}>
      <h2>Обо мне</h2>
      <p>
        Привет! Меня зовут Михаил, и я фронтенд разработчик с опытом в создании
        красивых и функциональных веб-приложений.
      </p>
    </section>
  );
};

const aboutStyle = {
  textAlign: 'left',

  padding: '2rem',
};

export default AboutMe;
