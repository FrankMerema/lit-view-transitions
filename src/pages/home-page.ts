import {css, html, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import '../components/fv-button/fv-button';
import '../components/fv-counter/fv-counter';
import {transitionHelper} from '../utils/view-transition-helper';

@customElement('home-page')
export class HomePage extends LitElement {
  static override styles = css``;

  @state()
  private counter = 0;

  private increase() {
    transitionHelper({
      updateDOM: async () => {
        this.counter++;
        await this.updateComplete;
      },
    });
  }

  private decrease() {
    transitionHelper({
      classNames: ['decrease'],
      updateDOM: async () => {
        this.counter--;
        await this.updateComplete;
      },
    });
  }

  override render() {
    return html`
      <fv-button @fv-button-click="${this.increase}">Increase</fv-button>
      <fv-button @fv-button-click="${this.decrease}">Decrease</fv-button>
      <fv-counter count="${this.counter}"></fv-counter>
    `;
  }
}
