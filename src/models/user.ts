import mongoose, { Schema } from "mongoose";


export const UserSchema = new Schema({
    name: { type: String, maxLength: 50, required: true },
    mail: { type: String, maxLength: 50, required: true },
    username: { type: String, maxLength: 50, required: true },
    password: { type: String, required: true }
});

export const User = mongoose.model("User", UserSchema);

