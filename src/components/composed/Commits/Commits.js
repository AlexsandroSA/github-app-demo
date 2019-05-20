import React from 'react';

import { formartDate } from 'utils/helpers/dateManager';
import { CommitGroup, CommitItem, CommitTitle, CommitAuthor } from './Commits.styles';

const Commits = ({ message, author }) => (
  <CommitGroup>
    <CommitItem>
      <CommitTitle>{message}</CommitTitle>
      <CommitAuthor>
        <span>{author.name}</span>
        <time> - {formartDate(author.date)}</time>
      </CommitAuthor>
    </CommitItem>
  </CommitGroup>
);

export default Commits;
