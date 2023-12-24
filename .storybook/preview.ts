import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import '../src/assets/themes/ui/theme.scss';
import 'primeflex/primeflex.css';
import PrimeVue from 'primevue/config';

setup((app) => {
  app.use(PrimeVue);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}


export default preview
