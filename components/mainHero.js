
import Theme from '../theme.js';

const theme = Theme();

class MainHero extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      this.shadowRoot.innerHTML = `
        <style>
            .mainHero {
                width: 100%;
                background-color: ${theme.LightBlue};
                height: 40rem;
            }
        </style>
        <div class="mainHero"></div>
      `;
    }
  }

  // Define the custom element with the specified tag name
  customElements.define('main-hero', MainHero);