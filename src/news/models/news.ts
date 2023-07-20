import { ObjectId } from "mongodb";

export default interface News{
    title: string;
    content: string;
    id?: ObjectId;
}