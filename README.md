#Desafio de auto-complete e busca disponibilidade

Widget Responsivo

Primeira aplicação com NodeJS

##Estrutura Front-End: 

###Arquiterura CSS

 - **Pré-processador**: SASS/SCSS
 - **Sintaxe**: SCSS
 - **Metodologia**: ITCSS - Inverted Triangle CSS


### Arquitetura JavaScript

 - **Biblioteca**: jQuery
 - **Plugins**: Pickadate e Typeahead


### Automação e gerenciador de dependências

- GruntJS
- Bower
- NPM


### Outros

- **Ícones**: Convertidas em fonte, "chanllegeicons" 
- **Fontes**: Gotham Light, Gotham Medium e Gotham Bold.


##Estrutura Back-End: 

- **Plataforma**: NodeJS
- **Framework**: Express
- **Biblioteca**: Mongoose
- **Banco**: MongoDB


##Instalação o mongodb

**MacOs**

```
sudo brew install mongodb
```

**Linux**

```
sudo apt-get install mongodb
```

##Procedimento(Testado no ubuntu)

>1. *git clone projeto*
2. *cd projeto*
3. *sudo npm install --unsafe-perm*
4. *npm start* // http://localhost:9000


obs: O banco será importado quando for executado o terceiro passo, requerendo que esteja instalado o mongoDB.


###Importar o banco manualmente

```
cd db/
```

```
mongoimport --db desafiohu --collection hotels --type json --file hotels.json --jsonArray
```

```
mongoimport --db desafiohu --collection availability --type json --file availability.json --jsonArray
```


