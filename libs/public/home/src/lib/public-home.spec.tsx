import { render } from '@testing-library/react';

import PublicHome from './public-home';

describe('PublicHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PublicHome />);
    expect(baseElement).toBeTruthy();
  });
});
