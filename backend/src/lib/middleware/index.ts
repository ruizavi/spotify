import auth from "./auth";
import error from "./error";
import upload from "./multer";

const middleware = { auth, error, upload };

export default middleware;
