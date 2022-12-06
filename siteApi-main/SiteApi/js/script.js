document.querySelector("#botao").onclick=function(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then(
        function(res){
            return res.json()
                }
            ).then(
                function(res){
                    let main=document.querySelector("main")
                    let div=document.createElement("div")
                    div.setAttribute("id","div-frase")
                    let pfrase=document.createElement("p")
                    pfrase.setAttribute("id","frase")
                    pfrase.append(
                        document.createTextNode(res.value)
                    )
                    div.append(pfrase)
                    main.append(div)
                        
                }
            )
        }