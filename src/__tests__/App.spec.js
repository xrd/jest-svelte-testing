// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom/extend-expect';

import { render, fireEvent } from '@testing-library/svelte';

import App from '../App.svelte';

describe('#App', () => {
  test('clicks on the bread button', async () => {
    const { getByText } = render(App);
    const button = getByText('Bread');
    await fireEvent.click(button);
    const text = 'Bread was clicked.';
    expect(getByText(text)).toBeInTheDocument();
  });
});
