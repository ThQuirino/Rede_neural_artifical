import {Express} from 'express';
import bodyParser from 'body-parser';
import { Server } from 'http';
const cors=require('cors');
const express=require('express')
require('dotenv').config();
const routes=require('./routes')

export class SetupApplication{

    express:Express
    port:string;
    
    constructor(port :string)
    {
        this.port=port;
        this.express=express();
        this.configExpress();
        this.route();
    }

    private configExpress(){

        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended:true}));

    }
    private route(){
        this.express.use(routes);
    }
    
    public start(): void {
        this.express.listen(this.port, () => {
          console.log(`Server running on port ${this.port}`);
        });
    }

}