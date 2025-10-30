# Configuração do EmailJS para Formulário de Contato

## Passo 1: Criar conta no EmailJS

1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

## Passo 2: Configurar Serviço de Email

1. No dashboard, vá em "Email Services"
2. Clique em "Add New Service"
3. Escolha "Gmail" 
4. Conecte com a conta: mullerlisboaconstrutora@gmail.com
5. Anote o **Service ID** que será gerado

## Passo 3: Criar Template de Email

1. Vá em "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com estas variáveis:

**Subject:** Novo Orçamento - {{subject}}

**Content:**
```
Novo orçamento solicitado através do site:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Tipo de Projeto: {{subject}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do site Muller & Lisboa.
```

4. Anote o **Template ID**

## Passo 4: Obter Public Key

1. Vá em "Account" > "General"
2. Copie a **Public Key** (ou API Key)

## Passo 5: Configurar no Projeto

1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione suas credenciais:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

3. Atualize o arquivo `Contact.jsx` substituindo:
   - 'YOUR_SERVICE_ID' por process.env.VITE_EMAILJS_SERVICE_ID
   - 'YOUR_TEMPLATE_ID' por process.env.VITE_EMAILJS_TEMPLATE_ID
   - 'YOUR_PUBLIC_KEY' por process.env.VITE_EMAILJS_PUBLIC_KEY

## Observações

- A conta gratuita permite 200 emails por mês
- Os emails serão enviados para: mullerlisboaconstrutora@gmail.com
- Configure o template para incluir todas as informações do formulário
