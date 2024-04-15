import mongoose from 'mongoose';

interface IUser {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
}

const userSchema = new mongoose.Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, min: 6 },
});

export default mongoose.model<IUser>('User', userSchema);
