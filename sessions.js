import { v4 as uuidv4 } from 'uuid';

const sessions = {};

function addSession(username) {

  const sid = uuidv4();

  sessions[sid] = {
    username,
  };
  return sid;
}

function getSessionUser(sid) {
  return sessions[sid]?.username;
}

function deleteSession(sid) {
  delete sessions[sid];
}

export {
  addSession,
  deleteSession,
  getSessionUser,
};
