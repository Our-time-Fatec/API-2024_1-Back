import mongoose, { Schema, Document } from "mongoose";
import fs from "fs";
import path from "path";
import { User } from "./user"


interface ProjetoDocument extends Document {
    nomeProjeto: string;
    user: mongoose.Types.ObjectId;
    aoiProjeto: string[];
}


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
    aoiProjeto: { type: [{ type: String }], default: [] }
});

export default ProjectSchema.statics.loadAoiData = async function(filePath: string): Promise<string[]> {
    try {
        const nomeProjeto = __filename.replace(/^.*geo\.col_/, '');
        
        const filePath = path.join(__dirname, __filename);

        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
        return data.map((item: any) => item.aoi);
    } catch (error) {
        console.error("Erro ao carregar dados de AOI:", error);
        return [];
    }
};

export const Projeto = mongoose.model<ProjetoDocument>("Projeto", ProjectSchema);

