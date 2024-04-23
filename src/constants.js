export const LOGIN_STATUS = {
  PENDING: 'pending',
  NOT_LOGGED_IN: 'notLoggedIn',
  IS_LOGGED_IN: 'loggedIn',
};

export const FLASHCARD_STATUS = {
  PENDING: 'pending',
  NOT_GUESSED: 'notGuessed',
  IS_GUESSED: 'guessed',
};

export const SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
  REQUIRED_COLLECTION: 'Collection-not-found',
};

export const CLIENT = {
  NETWORK_ERROR: 'networkError',
  NO_SESSION: 'noSession',
};

export const MESSAGES = {
  [CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network.  Please try again',
  [CLIENT.NO_SESSION]: 'Client Side Error. No session found.',
  [SERVER.AUTH_INSUFFICIENT]: 'Your username/password combination does not match any records, please try again.',
  [SERVER.AUTH_MISSING]: 'The request you are sending is missing the required authorization header.',
  [SERVER.REQUIRED_USERNAME]: 'Please enter a valid (letters and/or numbers) username',
  [SERVER.REQUIRED_COLLECTION]: 'Please select collection.',
  default: 'Something went wrong.  Please try again',
};

