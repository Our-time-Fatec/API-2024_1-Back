import mongoose, { Schema, Document } from "mongoose";
import { ObjectId } from "mongodb";


const ProjectSchema = new Schema({
    name: { type: String, maxLength: 50, required: true },
    aoi: { type:ObjectId, required: true, ref: "Aoi"},
    grades: { type:ObjectId, required: true, ref: "Grade"},
    apontamentos: { type:ObjectId, required: true, ref: "Apontamento"},
    alteracoes: { type:ObjectId, required: true, ref: "Alteracoe"},
});


export const Project = mongoose.model("Project", ProjectSchema);

