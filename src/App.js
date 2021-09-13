import { useMediaQuery } from 'react-responsive'
import './App.css';

import Desktop from './components/desktop'
import Mobile from './components/mobile'
import Laptop from './components/laptop'
import BigScreen from './components/big_screen'

function App() {

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 481px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <div>
      {isMobileDevice && <Mobile />}
      {isDesktop && <Desktop />}
    </div>
  );
}

export default App;
