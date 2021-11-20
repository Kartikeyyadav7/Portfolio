// import mongoose from "mongoose";

// const connection = {};

// async function dbConnect() {
// 	if (connection.isConnected) {
// 		return;
// 	}

// 	const db = await mongoose.connect(
// 		`mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@portfolio.4mrdl.mongodb.net/${process.env.DB_Name}?retryWrites=true&w=majority`,
// 		{
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 		}
// 	);

// 	connection.isConnected = db.connections[0].readyState;

// 	console.log("db connected");
// }

// export default dbConnect;
