import multer from "multer"
import {uuidV4} from "mongodb/src/utils.js";

export const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
    },
    filename:(req, file,cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `img/-${uuidV4().toString()}-${file.fieldname}-${Date.now()}.${ext}`)
    }
})