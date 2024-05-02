import mongoose, { Schema } from "mongoose";
import { User } from "./user"


const ProjectSchema = new Schema({
    nomeProjeto: { type: String, maxLength: 50, required: true },
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true,
    validate: {
        validator: async function (id:string) {
            const user = await User.findById(id);
            return !!user;
        },
        message: 'O usuário fornecido não existe'
    }},
    aoiProjeto: { type: String, maxLength: 50, required: true },
});

export const Projeto = mongoose.model("Projeto", ProjectSchema);

