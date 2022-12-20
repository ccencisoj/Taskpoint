import fs from "fs";
import multer from "multer";
import pathResolver from "path";
import { Request } from "express";
import { generateRandomHash } from "./generateRandomHash";
import { UploadException } from "../exceptions/UploadException";

interface Image {
  path: string;
  extension: string;
}

export const getImageFromRequest = (req: Request) => {
  return new Promise<Image>((resolve, reject) => {

    // Resolvemos la ruta de destino
    const destination = pathResolver.resolve("./uploads");

    // Cargamos la imagen en la ruta de destino
    multer({dest: destination}).single("image")(req, null, ()=> {

      // Lanzamos error si el archivo no es valido
      if(typeof req.file === "undefined") {
        return reject(new UploadException("The file is invalid"));
      }

      // Obtenemos la extension
      const extension = req.file.originalname.split(".").pop().toLocaleLowerCase();

      // Verificamos que la extension sea valida      
      if(!(["jpg", "jpeg", "svg", "png"].includes(extension))) {
        return reject(new UploadException("Allowed extensions: .jpg, .jpeg, .svg, .png")); 
      }

      // Guardamos la imagen con un nombre aleatorio y la extension
      const path = destination + "/" + generateRandomHash() + "." + extension;

      fs.createReadStream(req.file.path).pipe(fs.createWriteStream(path));

      return resolve({path, extension});
    })
  })
}
