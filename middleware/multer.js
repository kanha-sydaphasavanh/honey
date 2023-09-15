const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/'); // Spécifiez le dossier de destination sur le disque
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Utilisez le nom de fichier d'origine
    },
});

const upload = multer({ storage: storage });

module.exports = upload;