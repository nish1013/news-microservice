import { ObjectId } from "mongodb";

export default class News{
    constructor(public title: string, public content: string, public id?: ObjectId){}
}