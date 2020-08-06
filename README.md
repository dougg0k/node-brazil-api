# Node Brazil API

### Biblioteca para acesso e realização de operações nas APIs do Brasil, como NFe, NFCe, MDFe, CTe pelo SEFAZ e CEP pelos Correios.

---

### Instalação

```
npm i node-brazil-api
```

### Uso

```javascript
const brApi = require("node-brazil-api");

// Para uso das APIs do SEFAZ, pfx ou pem é necessário, e o passphrase caso conter.
brApi.setupAccess({ ambiente: Ambiente, passphrase?: string, pfx?: Buffer, privatePEM?: Buffer, publicPEM?: Buffer, rejectUnauthorized?: boolean });

// Para uso da NFE
const resultado = await brApi.NFE.autorizacaoNfeSync({ /* Dados */ });

// Para uso dos Correios
const resultado = await brApi.Correios.fetchCEP(cep: string);

// Para outras APIs, cheque as funcoes exportadas em seus respectivos objetos. NFE, NFCE, MDFE, CTE, Correios.
```

---

Comandos:

- Converter PFX para chave PEM privada `openssl pkcs12 -in yourP12File.pfx -nocerts -out privateKey.pem`
- Converter PFX para chave PEM publica `openssl pkcs12 -in yourP12File.pfx -clcerts -nokeys -out publicKey.pem`

---

Rascunhos:

- RecepcaoEvento - Recepcao de mensagem de evento (Cancelamento)
- NfeInutilizacao - Atendimento de solicitacoes de inutilizacao de numeracao
- NfeConsultaProtocolo -
- NfeStatusServico - Consulta do status do servico prestado pelo portal SEFAZ
- NfeAutorizacao - Envio do XML para solicitacao de autorizacao de uso
- NfeRetAutorizacao - Retorno da solicitacao de autorizacao de uso
- Modelo 65 - NFCe
- Modelo 55 - NFe
- N - Number
- C - String/Char/Alfanumerico
- D - Date
- B - Boolean
- Base64Binary
- NFCe - Para varejo
- NFe - Outras operacoes

---

TODO:

- Toda interface precisara de confirmacao em entrada e saida
- Precisa ser feita interface para Async e Sync
- Talvez precise ter os calculos feitos direto na biblioteca
- Precisaria redirecionar requests de estados que nao possuem SEFAZ para endpoints no quais sao utilizados para esses. Geralmente os virtuais.

---

Fluxo NFE:

- Dados -> XML -> Assina -> XML Assinado -> Envia ao Sefaz -> Autoriza ou Rejeita -> Caso Autorizar, resulta em DANFE.
- Caso mesmo a nota seja autorizada mas esteja em um estado amarelo, precisa corrigir o que for e reenviar.
- Quando uma nota fica presa, parece que o fluxo de envio tambem fica, logo nao pode haver problemas.
- Cliente e o Destinatario
- Parece que a parte tributaria e mais complexa, por conta do Sefaz, talvez isso complique na hora de montar as regras.
- Cert expira dia 11 de agosto
- Contingencia parece ser algo que precisa ser feito tambem, parece ter relacao com Online e Offline - Talvez tenha tambem Formulario de Seguranca, Dpec, Scan.
- Situacoes como Internet, Webservice estejam online e dados sejam validos, e o cenario ideal. Porem precisa tratar dos outros pois nao e o unico cenario.
- Header parece nao estar mais em uso pela Sefaz.
- Ordem as propriedades no xml parece ter importancia
- Ainda preciso confirmar se a Signature vai em todo o envio ou apenas apos ser processado pelo Sefaz ou mesmo se vai em todo tipo de request, provavelmente nao.

Cenarios a serem tratados:

- Se o webservice sair de operacao?
- Se ele nao detectou o certificado digital?
- Se a nota fiscal nao for autorizada?
- Se a conexao com a internet cair no meio do processo? Como transmitir os dados apos estabelecer uma nova conexao.
- Como controlar a numeracao e as series da NFe?

Parâmetro de Entrada: <nfeDadosMsg>
Parâmetro de Saída: <nfeResultMsg>

Signature vai em toda NFe, ou seja mesmo em um lote, cada NFe dentro do lote, contem uma Signature.
Lote possui multiplas NFe. Um Lote possui um id(idLote), enquanto cada NFe, possui seu id (infNFe).

---

Sintegra:

status
code
message
cnpj
nome_empresarial/razao_social
nome_fantasia
inscricao_estadual
tipo_inscricao
data_situacao_cadastral
situacao_cnpj
situacao_ie
data_inicio_atividade
regime_tributacao
informacao_ie_como_destinatario
porte_empresa
cnae_principal
cnae_principal.code
cnae_principal.text
data_fim_atividade
uf
cep
municipio
bairro
logradouro
complemento
numero
ibge
ibge.codigo_municipio
ibge.codigo_uf
