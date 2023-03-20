
import multer from 'multer'
import {GridFsStorage} from "multer-gridfs-storage"
import {MONGODB_URL} from '../mongoose'
const storage = new GridFsStorage({
    url: MONGODB_URL,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-any-name-${file.originalname}`,
        };
    },
});

export const upload= multer({ storage });