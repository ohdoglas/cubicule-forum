# ENDPOINT /LOGIN

Rota para login de usuário de nível USER

### Rota: POST /LOGIN

**Rota para login de usuário**

**Parâmetros de requisição**

O usuario precisa informar as credenciais de username ou email e senha para acessar uma conta de usuário cadastrada no banco de dados

#### Não-obrigatório:



#### Obrigatórios:

```json
{
  "username": "username",
  OU,
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

- Após a validação das credenciais, o usuário é autenticado e autorizado a fazer login. É gerado um jwt para acesso a rotas protegidas.
---

