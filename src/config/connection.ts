import mongoose from 'mongoose';

//mongoose.connect('mongodb://127.0.0.1:27017/videosAndResponses');
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialDB",
);

export default mongoose.connection;
