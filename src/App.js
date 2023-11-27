// App.js
import React from 'react';

function App() {
  return (
    <div className="app-container" style={appStyle}>
      <header className="header-container" style={headerStyle}>
      </header>
      <main className="main-container" style={mainStyle}>
        <section>
          <h2>PUDOVNIN MIKHAIL</h2>
        </section>
        <section>
          <div>
          <h1>CONT</h1>
          <tr>
            <td>
              <a href='pudovninmihail@gmail.com'>pudovninmihail@gmail.com</a>
            </td>
            <td>
              <a href='https://t.me/Lulgang'>t.me/Lulgang</a>
            </td>
          </tr>
          </div>
        </section>
      </main>
    </div>
  );
}

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh', // Используем 100vh для растяжения на всю высоту экрана
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'left',
  padding: '1rem',
};

const mainStyle = {
  flex: 1, // Растягиваем main на все доступное пространство
  overflow: 'hidden', // Если содержимое main не помещается, скрываем лишнее
  paddingTop: '24px',
  paddingBottom: '6px',
  paddingLeft: '6px',
  paddingRight: '6px',
  fontFamily: 'Fira Sans, sans-serif',
  fontWeight: 'normal',
  textAlign: 'left',
  color: '#111',
  background: '#333',
};

export default App;
