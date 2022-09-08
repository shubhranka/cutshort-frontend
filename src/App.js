import './App.css';
import Logo from './components/Logo';
import RouterComponent from './components/RouterComponent';
import LogoContainer from './containers/LogoContainer';



function App() {
  return <>
      <LogoContainer>
        <Logo/>
    </LogoContainer>
    <RouterComponent/>
  </>
}

export default App;
