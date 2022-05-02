import { render } from '@testing-library/react';

import PublicFixtures from './public-fixtures';

describe('PublicFixtures', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PublicFixtures />);
    expect(baseElement).toBeTruthy();
  });
});
