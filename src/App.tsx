import './App.css';
import Hero from './components/Hero/Hero';
import CommonConstant from './constants/common.constant';
import useWindowSize from './services/window-size-service';
// import Stack from './components/Stack/Stack';


/**
 * The `App` component to be rendered.
 *
 * @returns   {JSX.Element}   The `App` component.
 */
function App() {
  const sizeWidth = useWindowSize().width || CommonConstant.NUMERIC.ZERO;
    if (810 < sizeWidth) {
    return <div>Please use mobile</div>;
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
