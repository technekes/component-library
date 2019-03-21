import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from './Link.component';

storiesOf('Typography/Link', module).add(
  'Standalone',
  () => (
    <Link solo={true} href="https://www.tkxs.com" target="_blank">Read More</Link>
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI Link.
        `,
    },
  },
);

storiesOf('Typography/Link', module).add(
  'Within Text',
  () => (
    <p>Lorem ipsum dolor sit amet,
      consectetur <Link href="https://www.tkxs.com" target="_blank">adipiscing</Link> elit.</p>
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI Link.
        `,
    },
  },
);