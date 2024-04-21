
import express from 'express'
import connecDB from '../database/index.js'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
import cors from  "cors";
dotenv.config();
const app = express()

connecDB()
app.use(express.json({limit:'20kb'}))
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(cookieParser());
app.use(cors())

import useAuthRouter from '../routes/auth.routes.js'
import useNotesRouter from '../routes/notes.routes.js';
import useKey from '../routes/api.routes.js'
app.use('/api/auth',useAuthRouter)
app.use('/gen',useKey)
app.use('/api/notes',useNotesRouter)
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

export {app}