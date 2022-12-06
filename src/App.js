function App() {
  const list = [
    'Invent new traffic lights',
    'Rehearse a movie scene',
    'Improve the spectrum technology',
  ].map((x, i) => (<li key={i}>{x}</li>));
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo"
      />
      <ul>
        {list}
      </ul>
    </>
  );
}

export default App;
