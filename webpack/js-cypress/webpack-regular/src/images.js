function loadBootstrapCSS() {
    import('bootstrap/dist/css/bootstrap.min.css')
      .then(() => {
      })
      .catch((error) => {
        console.error('An error occurred while loading Bootstrap CSS:', error);
      });
  }
  
  loadBootstrapCSS();

import imageOne from './images/grace_hopper.jpg'
import imageTwo from './images/imagenUnoWebpack.jpg'

