"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
cloudinary.config({
    cloud_name: 'dnnq8kne2',
    api_key: '711294436262969',
    api_secret: 'CnBFRYCGRZjN36Y4JGnC5tfA_Ic'
});
const upload = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const img = req.files;
    let urls = yield getUrl(img);
    res.locals.url = urls.url;
    res.locals.public_id = urls.public_id;
    next();
});
const getUrl = (files) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    // const uploader = async (path: any) => await cloudinary.uploader.upload(path,'Images')
    // const url = []
    const file = files[0];
    return new Promise((resolve, reject) => {
        let cld_upload_stream = cloudinary.uploader.upload_stream({
            folder: 'Tour'
        }, (error, result) => {
            if (result) {
                resolve(result);
            }
            else {
                reject(error);
            }
        });
        streamifier.createReadStream(file.buffer).pipe(cld_upload_stream);
    });
});
exports.default = upload;
