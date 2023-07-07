Buenas Francisco.

Los pasos:

-Abre la terminal:

git clone + URL repo en github

cd gpt-node-template-js

npm install

cd src

node index.js

Una vez instalado todo, intenta hacer un POST a:

http//localhost:3000/api/v1/gpt

con un formato JSON tal que así:

{
"query": "cómo estás?"
}

Te pasaré por nuestro chat la OPENAI_API_KEY

Te pasaré también la OPENAI_ORGANIZATION_KEY.
