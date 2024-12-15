import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IStudent {
    name: string;
    mobile: string;
    email: string;
    father:string;
    mother:string;
    aadhar:string;
    dob:string;
    localAddress:{
        line1:string;
        line2?:string;
        subDistrict?:string;
        district:string;
        state:string;
        pincode:number
    };
    permanentAddress:{
        line1:string;
        line2?:string;
        subDistrict?:string;
        district:string;
        state:string;
        pincode:number
    };
    avatar?: string;
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const userSchema = new Schema<IStudent>({
    name: { type: String, required: false },
    mobile: { type: String, required: false },
    email: { type: String, required: false },
    father: { type: String, required: false },
    mother: { type: String, required: false },
    aadhar: { type: String, required: false },
    dob: { type: String, required: false },
    localAddress: {
        line1:{ type: String, required: false },
        line2:{ type: String},
        subDistrict:{ type: String},
        district:{ type: String, required: false },
        state:{ type: String, required: false },
        pincode:{ type: Number, required: false },
    },
    permanentAddress: {
        line1:{ type: String, required: false },
        line2:{ type: String},
        subDistrict:{ type: String},
        district:{ type: String, required: false },
        state:{ type: String, required: false },
        pincode:{ type: Number, required: false },
    }

  });
  
  // 3. Create a Model.
  const Student = model<IStudent>('User', userSchema);
export default Student