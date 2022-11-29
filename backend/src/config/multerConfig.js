import multer from 'multer'
import { extname, resolve } from 'path'

//função para não exister foto no mesmo milissegundo
const aleatorio = () => Math.floor(Math.random() / 10000 + 10000)



export default {
    fileFilter: (req, file, cb) =>{
        
        if(file.mimetype != 'image/png' && file.mimetype != 'image/jpeg'){
            return cb(new multer.MulterError('Somente arquivos PNG ou JPG.'))
        }
    
        return cb(null, true)
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
    
            cb(null, resolve(__dirname, '..','..','uploads', 'images'));

        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`)
        }
    })
}