import {SetupApplication} from './app';
const express=require('express')

const port : string=process.env.PORT || '3333'

class server{
    static start():void{
        const Application  = new SetupApplication(port);
        Application.start();
    }
}
server.start();
