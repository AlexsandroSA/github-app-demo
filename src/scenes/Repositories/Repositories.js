import React, { Fragment } from 'react';

import { Header, RepositoriesList } from 'components/composed';

const Repositories = ({ repositories, handleClickRepository }) => (
  <Fragment>
    <Header />
    <RepositoriesList
      data={repositories}
      handleClickRepository={handleClickRepository}
    />
  </Fragment>
);

export default Repositories;
