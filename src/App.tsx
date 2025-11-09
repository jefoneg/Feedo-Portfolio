import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
// import Stack from './components/Stack/Stack';

//temporary
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

/**
 * The `App` component to be rendered.
 *
 * @returns   {JSX.Element}   The `App` component.
 */
function App() {
  const size = useWindowSize();

  if (810 < size.width) {
    return <div>Please use mobile</div>
  }

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
