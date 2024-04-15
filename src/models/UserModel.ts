import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, min: 6 },
  },
  { timestamps: true }
);

userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model<IUser>('User', userSchema);
