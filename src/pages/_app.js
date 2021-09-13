import Particles from "react-tsparticles";
import { ThemeProvider } from 'styled-components'
import NextNProgress from "nextjs-progressbar";
import usePersistedState from '../utils/UsePersistedState';
import SwitchTheme from '../components/switchTheme';
import Navbar from '../components/navbar';
import light from '../styles/themes/light';
import Globals from '../styles/globals.js';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('theme', light);

  return (
    <ThemeProvider theme={theme}>
      <Globals/>
      <NextNProgress
        color="#29D"
        stopDelayMs={300}
        height={3}
        showOnShallow={true}
      />
      <SwitchTheme theme={theme} setTheme={setTheme}/>
      <Navbar/>
      <Component {...pageProps}/>
      <Particles style={{position: 'absolute', top: 0, left: 0}}
        params={{
          "fps_limit":50,
          "interactivity":{
            "detectsOn":"canvas",
            "events":{
            "onClick":{
              "enable":true,
              "mode":"push"
            },
            "onHover":{
              "enable":false,
              "mode":"repulse"
            },
            "resize":true
          },
          "modes":{
            "push":{
              "particles_nb":4
            },
            "repulse":{
              "distance":200,
              "duration":0.4}
            }
          },
          "particles":{
            "color":{
              "value": theme.colors.text,
            },
            "links":{
              "color": theme.colors.text,
              "distance":150,
              "enable":true,
              "opacity":0.4,
              "width":1
            },
            "move":{
              "bounce":false,
              "direction":"none",
              "enable":true,
              "outMode":"out",
              "random":false,
              "speed":2,
              "straight":false
            },
            "number":{
                "density":{
                  "enable":true,
                  "area":800
                },
              "value":40
            },
            "opacity":{
              "value":0.5
            },
            "shape":{
              "type":"circle"
            },
            "size":{
              "random":true,
              "value":5
            },
            "fullScreen": {
              "enable": true,
              "zIndex": 1
            },
          },
          "detectRetina": true
      }}/>
    </ThemeProvider>
  )
};

export default MyApp;