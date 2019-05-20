import React, { Fragment } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import { formartDate } from '../../utils/helpers/dateManager';
import Header from '../../components/composed/Header/Header';
import RepositoriesList from '../../components/composed/RepositoriesList/RepositoriesList';
import Repository from '../../components/composed/Repository/Repository';

import {
  Row,
  Column,
  CommitGroup,
  CommitItem,
  CommitTitle,
  CommitAuthor
} from './Home.styles';

const Home = ({
  isRepositorySelected,
  repositories,
  repositorySelected,
  handleClickRepository,
  commits
}) => (
  <Fragment>
    <Header />
    <Row>
      <Column>
        {!isRepositorySelected && (
          <RepositoriesList
            repositories={repositories}
            handleClickRepository={handleClickRepository}
          />
        )}

        {isRepositorySelected && (
          <div>
            <h2>{repositorySelected.name}</h2>
            <h4>Commits</h4>
            <CommitGroup>
            {commits.map(({ commit }) => (
              <CommitItem>
                <CommitTitle>{commit.message}</CommitTitle>
                <CommitAuthor>
                  <span>{commit.author.name} - </span>
                  <time>{formartDate(commit.author.date)}</time>
                </CommitAuthor>
              </CommitItem>
            ))}
            </CommitGroup>
          </div>
        )}
      </Column>
    </Row>
  </Fragment>
);

Home.defaultProps = {
  repositories: [],
  commits: []
};

Home.propTypes = {
  repositories: arrayOf(
    shape({
      id: number,
      name: string,
      description: string
    })
  ),
  commits: arrayOf(
    shape({
      commit: shape({
        author: shape({}),
        message: string
      }),
    })
  )
}

export default Home;
