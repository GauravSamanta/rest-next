import mongoose from "mongoose";


const connect = async () => {

const connectionState=mongoose.connection.readyState;

if(connectionState===1)
    {
        console.log("Already Connected to Database");
        return;
    }
if(connectionState===2)
    {
        console.log("Connecting to Database");
        return;
    }
try {
    mongoose.connect(process.env.MONGO_URI!,
        {
            dbName:"next-rest-api",
        }
    )
} catch (error:any) {
    console.log("Error Connecting to Database",error);
    throw new Error("Error Connecting to Database",error);

    
}


}
export default connect;