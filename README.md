# Node Brazil API - WIP

> Eu dei inicio sem conhecimento nenhum em NFe e ninguem para ajudar, porem agora acho que nao vou ter tempo para continuar, quem estiver interessado, fique livre para fazer um fork. Eu tentei escrever uma boa base.

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
