import { html } from 'lit';
import '../src/gotem-card.js';

export default {
  title: 'GotemCard',
  component: 'gotem-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <gotem-card
      style="--gotem-card-background-color: ${backgroundColor || 'brown'}"
      .header=${header}
    >
    </gotem-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
