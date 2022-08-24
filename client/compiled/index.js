import App from './App.js';
import { getState, update } from './store.js';
var container = document.getElementById('root');
var reactDOMRoot = ReactDOM.createRoot(container);

function render() {
  var _getState = getState(),
      motion = _getState.motion,
      contrast = _getState.contrast;

  if (contrast) {
    document.body.classList.add('contrastMode');
  } else {
    document.body.classList.remove('contrastMode');
  }

  reactDOMRoot.render(React.createElement(React.StrictMode, null, React.createElement(App, {
    motion: motion,
    contrast: contrast
  })));
}

render();
update(render);