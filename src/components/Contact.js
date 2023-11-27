// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section style={contactStyle}>
      <h2>Контакты</h2>
      <p>Email: pudovninmihail@gmail.com</p>
      {/* <p>LinkedIn: linkedin.com/in/ваш-профиль</p> */}
      {/* Добавьте свои контактные данные */}
    </section>
  );
};

const contactStyle = {
  textAlign: 'left',
  padding: '60vh',
};

export default Contact;
