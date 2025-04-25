# ENDPOINT /REGISTER

Rota para criação de usuário de nível USER

### Rota: POST /REGISTER

**Rota de registro de novo usuário**

**Parâmetros de requisição**

O usuario precisa informar as credenciais de username, email e senha para criar um novo usuário

#### Não-obrigatório:



#### Obrigatórios:

```json
{
  "username": "username",
  "email": "email@email.com",
  "password": "John!Doe123",
}
```

#### Critérios de aceite

**“USERNAME”**

- Precisa ser uma String
- Ter no mínimo 3 caracteres e no maximo 20 (maiusculas e minusculas)
- Pode conter caracteres especiais como: Pontos(.), Subtraços (_), Traços(-)

Exemplos de entradas válidas:
```
john_doe

Jane.Doe23

user-123

abc

12345
```

Exemplos de entradas inválidas:
```
ab (menos de 3 caracteres)

this_is_a_very_long_username (mais de 20 caracteres)

user@name (caracteres inválidos como @)

user name (espaço não é permitido)
```

**“EMAIL”**

- Precisa ser uma string
- Precisa ser um e-mail válido (com formato contendo @ e .com)
- Precisa ser único na tabela de clientes cadastrados, sistema não aceita duplicidades

**“PASSWORD”**

- Contém pelo menos uma letra maiúscula.
- Contém pelo menos um número.
- Contém pelo menos um caractere especial.
- Tem no mínimo 6 caracteres de comprimento.


#### Procedimento para requisições bem-sucedidas

- Após a validação dos dados passados, o usuário é cadastrado no banco de dados com username, email e senha criptografada, um e-mail de confirmação com um token/link é enviado ao e-mail cadastrado. Após a verificação do e-mail cadastrado o usuário estará autorizado a fazer login.
---

