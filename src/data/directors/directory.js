import directors from "./directors"
import officers from "./officers"
import execDirector from "./execDirector"

const directory = [
  ...execDirector,
  ...officers,
  ...directors
];

export default directory