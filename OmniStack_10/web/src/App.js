import React from 'react';
import Header from './Header'

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
// Propriedade: Informações que um componete PAI passa para o componente FILHO.

function App() {
  return (
    <>
      <Header title="Dashboard" />
      <h1>Hello Word!</h1>
    </>
  );
}

export default App;
