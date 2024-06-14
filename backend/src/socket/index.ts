import jamSocket from "./jam";
import likeSocket from "./like";
import queueSocket from "./queue";
import stateSocket from "./state";

const handlers = {
  like: likeSocket,
  state: stateSocket,
  queue: queueSocket,
  jam: jamSocket,
};

export default handlers;
