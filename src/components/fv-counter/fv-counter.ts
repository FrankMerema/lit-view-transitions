import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('fv-counter')
export class FvCounter extends LitElement {
  static override styles = css`
    .counter {
      font-family: sans-serif;
      text-align: center;
      position: absolute;
      inset: 50% 0 auto;
      transform: translateY(-50%);
      font-size: 25vw;
      view-transition-name: count;
      /* This won't be required soon. In fact, it already works without this in Canary */
      contain: layout;
    }
  `;

  @property({type: Number})
  count: number = 0;

  override render() {
    return html` <div class="counter">${this.count}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-counter': FvCounter;
  }
}
