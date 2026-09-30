import express from "express"

const app = express()
const port = 3000

app.get("/carros/:lanchas", (req, res)=>{
    res.send(req.params)
})

app.listen(3000, () => {
    console.log(`servidor rodando na porta ${port}`)
});

app.get("/motos", (req, res)=>{
    res.send("ola pessoal")
});

