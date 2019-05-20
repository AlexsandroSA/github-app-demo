import React from 'react';
import { arrayOf, func, string, shape, number } from 'prop-types';

import { WebRouter } from 'config/router';
import Repository from '../Repository/Repository';
import { Repositories } from './RepositoriesList.styles';

const RepositoriesList = ({ data, handleClickRepository }) => (
  <div>
    {data ? (
      <Repositories>
        {data.map(respository => (
          <Repository
            key={respository.id}
            id={respository.id}
            url={WebRouter.REPOSITORY_DETAILS}
            name={respository.name}
            description={respository.description}
            handleClickRepository={handleClickRepository(respository)}
          />
        ))}
    </Repositories>
    ) : 'Loading...'}
  </div>
);

RepositoriesList.propTypes = {
  data: arrayOf(
    shape({
      id: number,
      name: string,
      description: string,
    })
  ).isRequired,
  handleClickRepository: func,
};

RepositoriesList.defaultProps = {
  description: "",
  handleClickRepository: () => undefined,
};

export default RepositoriesList;
