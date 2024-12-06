# ENDPOINT /SETUP/ADMIN

Rota para configuraçao inicial de Super Admin

### Rota: POST /SETUP/ADMIN

**Rota de Setup inicial e desbloqueio de superadmin**

**Parâmetros de requisição**

O usuario precisa informar o token de autenticaçao e os dados de cadastro do usuario que sera registrado como super admin.

#### Não-obrigatório:



#### Obrigatórios:

```json
{
  "username": "username",
  "email": "email@email.com",
  "password": "John!Doe123",
  "token": "token"
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

**“TOKEN”**

- Precisa ser uma string
- Precisa ser um token valido



#### Procedimento para requisições bem-sucedidas

- Após a validação dos dados do usuário e autenticação/autorização do token, um novo usuário é cadastrado com o role de Super Admin. O usuário será orientado a verificar o email passado no cadastro antes de logar, será enviado um e-mail para verificação com um link para a ação.

---

