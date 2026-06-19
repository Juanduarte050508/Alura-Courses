    const express = require('express')
    const rotaLivro = require("./rotas/livro")
    const {getLivros} = require("./controladores/livro")

    const app = express()

    app.use("/livros", rotaLivro)

    const port = 8000

    app.listen(port, () => {
        console.log(`Escutando a porta${port}`)
    })

