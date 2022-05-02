import { render } from '@testing-library/react';

import PublicStats from './public-stats';

describe('PublicStats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PublicStats />);
    expect(baseElement).toBeTruthy();
  });
});
