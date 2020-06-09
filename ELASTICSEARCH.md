## Funcionamento do Elasticsearch

Para armazenar um usuário que participará do mapeamento, será necessário usar o Elasticsearch.
Será armazenado no Elasticsearch o seguintes:

_`{ user_id: 1, professional: ['array', 'de', 'profissões'] }`_

Dados esses que serão utilizados posteriormente para fazer a busca de usuários.

Os arquivos de configurações do Elasticsearch, pode ser encontrado na pasta
`elasticsearch/User`

O metódo **insertUser**, faz a inserção desses dados no Elasticsearch

O metódo **searchUser**, realizará a busca de usuários de acordo com as profissões desejadas pelo usuária que realizará a busca.

## Configuração do Elasticsearch

É necessário instalar o Elasticsearch em sua maquina em ambiente de desenvolvimento, para isso siga:

[https://www.elastic.co/pt/downloads/elasticsearch](Elasticsearch)

Em seguida, com o Elasticsearch instalado, bastar digitar no terminal `elasticsearch` que ele estará funcionando normalmente, e bastará iniciar o servidor do plural-app.
