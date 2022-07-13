import mongoose from "mongoose";

const connection = () => {
  mongoose
    .connect(
      "mongodb+srv://practice_project:password1234@cluster0.32njx.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((res) => {
      console.log(`Successfully connected to the mongoDB server ${res.connection.host}`.cyan.underline.bold);
    })
    .catch((error) => {
      console.log("some error occured");
    });
};

export default connection;
