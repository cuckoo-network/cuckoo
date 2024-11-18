import React from 'react';
import Danger from '@theme-original/Admonition/Icon/Danger';
import type DangerType from '@theme/Admonition/Icon/Danger';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof DangerType>;

export default function DangerWrapper(props: Props): JSX.Element {
  return (
    <>
      <Danger {...props} />
    </>
  );
}
