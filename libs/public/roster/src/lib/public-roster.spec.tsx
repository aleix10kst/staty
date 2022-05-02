import { render } from '@testing-library/react';

import PublicRoster from './public-roster';

describe('PublicRoster', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PublicRoster />);
    expect(baseElement).toBeTruthy();
  });
});
