import {Request,Response} from 'express'




module.exports ={

    async connectMenu(req:Request,res:Response){
        const data={
            menu:{
                menu1:'usuario',
                menu2:'perfil'
            }
        }
        try{
            return res.status(200).json(data);
        }catch(e){
            res.status(400).json({error:'unable to show users.',e})
        }
        return res.status(200).json({error:'não foi possível achar a base'})
    }
}