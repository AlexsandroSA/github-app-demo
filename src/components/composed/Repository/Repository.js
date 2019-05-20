import React from 'react';

import Link from '../../base/Link/Link';
import {
  Repository as RepositoryWrapper,
  Title,
  Description
} from './Repository.styles';

const Repository = ({ id, name, description, url, handleClickRepository }) => (
  <RepositoryWrapper key={id}>
    <Title>
      {handleClickRepository ? (
        <Link
          id={`repo-link-${id}`}
          url={url}
          handleClick={handleClickRepository}
        >
          {name}
        </Link>
      ) : name}
    </Title>
    <Description>{description}</Description>
  </RepositoryWrapper>
);



export default Repository;
