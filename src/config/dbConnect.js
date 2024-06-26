import mongoose from "mongoose";

await mongoose.connect("mongodb+srv://jpnc1695:Kaxoro89@viagens.6u4ziua.mongodb.net/dashBoardFInanceiro")

let db = mongoose.connection;

export default db;



