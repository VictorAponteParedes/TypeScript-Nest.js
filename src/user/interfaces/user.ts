import {Document} from 'mongoose'

export interface User extends Document {
 id?:number,
 name:string;
 lastName:string;
 descripcion:string;
}