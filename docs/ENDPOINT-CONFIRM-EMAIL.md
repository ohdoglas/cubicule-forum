# ENDPOINT /CONFIRM/:TOKEN

Rota para confirmação/verificação de email

### Rota: GET /CONFIRM/:TOKEN

**Rota para confirmação de email de usuário**

**Parâmetros de requisição**

O usuário, através do link enviado em seu email, confirma/verifica o email cadastrado, para que possa em seguida fazer login.

#### Não-obrigatório:



#### Obrigatórios:

```

token

```

#### Critérios de aceite

**“TOKEN”**

- Precisa ser uma string
- Precisa ser passado como parametro (req.params)
- Precisa ser um token válido e constar no banco de dados

#### Procedimento para requisições bem-sucedidas

- Após a validação do token, o email do usuário é autenticado/autorizado e o usuário estará apto a fazer login em sua conta. O usuário será redirecionado a pagina de login.

---

