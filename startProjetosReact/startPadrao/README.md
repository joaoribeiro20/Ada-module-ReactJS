1 ---- é precissario o node.js instalado 
2 ---- comandos 
       1 yarn init -y = gera um peckage.json, para controle de pacote
       2 npm install react react-dom = o react é a bibioteca em si e o react-dom é o responsavel por passar os componetes para o dom 

3 ---- dependencias para o lado de desenvolvimento (caso fosse usar outros plugin nao seria necessario)

npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server
       
       o babel permite tranformar o javascript que escrevemos em um javascript que a web entende, por exemplo comandos como export e importe o brase nao entende mas dai entra o babel que permite tranformar o nosso codigo em algo que o brawer entende 

       tambem temos outros plugins que intervere e enfluicia no css e html (sass é tipo um css turbinado, permitndo criar variaveis e funçoes)

4 ----  criar um arquivo chamado .babelrc = ele permite pegar algumas variaveis de ambiente
5 ---- adicionar esssa informação no arquivo .babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

6 ----  criar um arquivo chamado webpack.config.js =  ele que permitirar suspender um servidor, criar um servidor local, mais usado no ambiente de dev

opcional

1 ---- criar uma pasta public -> criar um arquivo index.html
2 ---- criar uma pasta src -> 

