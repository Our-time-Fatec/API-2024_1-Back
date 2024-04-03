import mongoose from "mongoose";

const {Schema} = mongoose;
const CruzeSchema = new Schema({
    num_area: { type: Number, required: true},
    municipio: { type: String, maxLength: 50, required: true},
    cod_estado: { type: String, maxLength: [2, "Informe o código do estado"], required: true},
    cod_class: { type: Number, required: true},
    class: { type: String, maxLength: [100, "É obrigatório informar a classe"]},
    obs: { type: String, maxLegnth:300, required: false}
});

const Cruze = mongoose.model("Cruzeiro", CruzeSchema);

export { Cruze };