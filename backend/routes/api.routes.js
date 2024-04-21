import { Router } from "express";
import { api } from "../models/api.models.js";
import {nanoid} from  'nanoid';
const router=Router();

router.route('/keys').post(async (req,res)=>{
try {
    const newKey=generateKey();
    const key1 = new key({ value: generateKey() });

    await key1.save({validateBeforeSave:false})
    return res.status(201).json({'key':key1})

} catch (error) {
    return res.status(500).json({error:'failed to create a key'})
}



})

function generateKey(value=20){

   return nanoid(value)
}
export default router;