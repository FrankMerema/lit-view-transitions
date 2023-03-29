import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('fv-button')
export class FvButton extends LitElement {
  static override styles = css`
    .btn {
      backface-visibility: hidden;
      background-color: #405cf5;
      border-radius: 6px;
      border-width: 0;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      font-family: -apple-system, system-ui, 'Segoe UI', Roboto,
        'Helvetica Neue', Ubuntu, sans-serif;
      height: 44px;
      margin: 12px 0 0;
      outline: none;
      padding: 0 25px;
      text-align: center;
    }

    .btn:disabled {
      cursor: default;
    }
  `;

  private dispatchClickEvent() {
    const event = new Event('fv-button-click', {bubbles: true, composed: true});
    this.dispatchEvent(event);
  }

  override render() {
    return html`<button class="btn" @click="${this.dispatchClickEvent}">
      <slot></slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-button': FvButton;
  }
}
