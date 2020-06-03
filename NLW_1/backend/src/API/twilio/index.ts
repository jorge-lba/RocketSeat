import twilio from 'twilio'
import dotenv from 'dotenv'
import {Request, Response} from 'express'

dotenv.config()

const accountSid = String(process.env.TWILIO_ACCOUNT_SID)
const authToken = String(process.env.TWILIO_AUTH_TOKEN)

const client = twilio(accountSid, authToken)
const MessagingResponse = twilio.twiml.MessagingResponse


export default{
    async response(request:Request, response:Response){
        const messages = await client.messages.list({limit: 2})
        const numberUSer = messages[0].from.replace('whatsapp:','')
        const messageUser = messages[0].body

        console.log(numberUSer, messageUser)               
        const twiml = new MessagingResponse()

        if(messageUser === 'comandos'){
            twiml.message('pontos de coleta\n cep\n')
        }else{
            twiml.message('Para saber quais comandos temos disponiveis digite:\n comandos')
        }



        response.writeHead(200, {'Content-Type': 'text/xml'});
        response.end(twiml.toString())
    }
}