import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';

import Avatar from './avatar';

import imageSrc from '../other/team/norbert-de-langen.jpg';

const Holder = styled.div({
  margin: 10,
  border: '1px dashed deepskyblue',
});

storiesOf('Components|Avatar', module).add('types', () => (
  <Fragment>
    <Holder>
      <Avatar src={imageSrc} />
    </Holder>
    <Holder>
      <Avatar src={imageSrc} size={10} />
    </Holder>
    <Holder>
      <Avatar src={imageSrc} size={20} />
    </Holder>
    <Holder>
      <Avatar src={imageSrc} size={1} />
    </Holder>
  </Fragment>
));