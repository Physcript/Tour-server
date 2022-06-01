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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicPost = void 0;
const Post_1 = __importDefault(require("../../model/Post"));
const publicPost = () => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield Post_1.default.aggregate([
        {
            $match: { status: true }
        },
        {
            $project: {
                "_id": "$_id",
                "title": "title",
                "body": "$body",
                "img": "$img",
                "tag": "$tag",
                "uid": "$uid",
                "createdAt": "$createdAt",
                "updatedAt": "$updatedAt"
            }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'uid',
                foreignField: 'uid',
                as: 'user'
            }
        },
        {
            $unwind: '$user'
        },
        {
            $project: {
                "_id": 1,
                "title": 1,
                "body": 1,
                "img": 1,
                "tag": 1,
                "user": {
                    firstName: "$user.firstName",
                    lastName: '$user.lastName',
                    email: '$user.email',
                    uid: '$user.uid'
                }
            }
        }
    ]);
    return post;
});
exports.publicPost = publicPost;
