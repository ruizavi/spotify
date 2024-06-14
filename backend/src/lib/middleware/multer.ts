import multer from "multer";
import {extname} from "node:path"
import crypto from "node:crypto"
const storage = multer.diskStorage({
  destination: "/tmp",
  filename(req, file, cb) {
    cb(null, crypto.randomUUID() + extname(file.originalname))
  },
});

const upload = multer({ storage: storage });

export default upload;
