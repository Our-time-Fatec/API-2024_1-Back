import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";
import { maxLength } from "class-validator";


const GradeSchema = new Schema({
    name: { type: String, maxLength: 50, required: true },
    features: { type: Array, required: true},
    crs: { type: String, maxLength: 5, required: true}
});


export const Grade = mongoose.model("Grade", GradeSchema);

