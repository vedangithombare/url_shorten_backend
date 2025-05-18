import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 5000;
const apiUrl = "https://cleanuri.com/api/v1/shorten";

app.use(cors());
app.use(express.json());

app.post('/shorten',async(req,res)=>{

    try{

        const response = await axios.post(apiUrl,{url:req.body.url},{withCredentials:true});
        const data = await response.data;

        console.log("shorten url : ", data.result_url);
        res.json({result_url: data.result_url});
        
    }catch (error){
        console.log("error: ",error);
        res.status(500).json({error:"error shortening link"});
    }
});

app.listen(PORT,()=>{
    console.log(`Backend server is running on port : ${PORT}`);
})