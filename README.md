# Node Gov API

### Biblioteca para acesso e realização de operações nas APIs do governo brasileiro, como NFe, NFCe, MDFe, CTe e CEP pelos Correios.

---

### Instalação

```
npm i node-gov-api
```

### Uso

```

```

### Descricao

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
- Conseguir a assinatura para o XML
- Verificar quais headers usar
- Talvez precise ter os calculos feitos direto na biblioteca
- Precisaria redirecionar requests de estados que nao possuem SEFAZ para endpoints no quais sao utilizados para esses. Geralmente os virtuais.

---

Commandos:

- Criar PEM private key `openssl pkcs12 -in yourP12File.pfx -nocerts -out privateKey.pem`
- Criar PEM public key `openssl pkcs12 -in yourP12File.pfx -clcerts -nokeys -out publicKey.pem`

---

Fluxo NFE:

- Dados -> XML -> Assina -> XML Assinado -> Envia ao Sefaz -> Autoriza ou Rejeita -> Caso Autorizar, resulta em DANFE.
- Caso mesmo a nota seja autorizada mas esteja em um estado amarelo, precisa corrigir o que for e reenviar.
- Quando uma nota fica presa, parece que o fluxo de envio tambem fica, logo nao pode haver problemas.
- Cliente e o Destinatario
- Parece que a parte tributaria e mais complexa, por conta do Sefaz, talvez isso complique na hora de montar as regras.
- Cert expira dia 11 de agosto
- Contingencia para ser algo que precisa ser feito tambem, parece ter relacao com Online e Offline - Talvez tenha tambem Formulario de Seguranca, Dpec, Scan.
- Situacoes como Internet, Webservice estejam online e dados sejam validos, e o cenario ideal. Porem precisa tratar dos outros pois nao e o unico cenario.
- Header parece nao estar mais em uso pela Sefaz.
- Ordem as propriedades no xml parece ter importancia
- A base depois do <nfeDadosMsg> tem a versao 4.00 e o xmlns http://www.portalfiscal.inf.br/nfe, ex: consStatServ, porem nao o nfeDadosMsg, apenas testando para confirmar. Por padrao parece ja ter algo.
- Ainda preciso confirmar se a Signature vai em todo o envio ou apenas apos ser processado pelo Sefaz

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
