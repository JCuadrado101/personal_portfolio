
import Theme from '../theme.js';

const theme = Theme();

class PrimaryNav extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      this.shadowRoot.innerHTML = `
        <style>
            .primary-nav {
                height: 100px;
                background-color: ${Theme.Black};
                width: 100%
            }
        </style>
        <nav class="primary-nav"></nav>
      `;
    }
  }

  // Define the custom element with the specified tag name
  customElements.define('primary-nav', PrimaryNav);