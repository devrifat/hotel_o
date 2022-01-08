const express = require('express')
const next  = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()


app.prepare()
    .then(
        () => {
            const server = express()
            if(dev){
                server.use('/api', createProxyMiddleware(
                    {
                        target: 'http://localhost:1000/',
                        changeOrigin: true
                    }
                ))
            }
            server.all('*', (req, res)=>{
                return handler(req, res)
            })
            
            server.listen(3000, (err)=>{
                if(err) throw err
                console.log('ready http://localhost:1000/ with 3000')
            })
        }
    )
    .catch((err)=>{
        console.log(err)
    })