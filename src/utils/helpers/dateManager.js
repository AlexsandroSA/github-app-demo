import moment from 'moment';

const dateManager = moment;
const DEFAULT_DATE_FORMAT = 'MMMM Do YYYY'

export const formartDate = date => dateManager(date).format(DEFAULT_DATE_FORMAT);
