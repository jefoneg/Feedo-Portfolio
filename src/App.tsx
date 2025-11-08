import './App.css';
import Hero from './components/Hero/Hero';
// import Stack from './components/Stack/Stack';

/**
 * The `App` component to be rendered.
 *
 * @returns   {JSX.Element}   The `App` component.
 */
function App() {
  return (
    <div className="App">
      <div className="container-box">
        <Hero />
      </div>
      {/* <div className="container-box">
        <Stack />
      </div> */}
    </div>
  );
}

export default App;
