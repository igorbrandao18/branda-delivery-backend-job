# Módulos do Backend do Sistema de Delivery

## Módulos a Serem Criados

1. **Módulo de Restaurantes**
   - **Funcionalidades**: Cadastro, login e gerenciamento de informações dos restaurantes.
   - **Endpoints**:
     - `POST /restaurants` (Cadastro)
     - `POST /auth/login` (Login)

2. **Módulo de Cardápio**
   - **Funcionalidades**: Gerenciamento de itens do cardápio.
   - **Endpoints**:
     - `GET /menu` (Listar itens)
     - `POST /menu` (Adicionar item)
     - `PUT /menu/:id` (Editar item)
     - `DELETE /menu/:id` (Remover item)

3. **Módulo de Pedidos**
   - **Funcionalidades**: Recebimento e gerenciamento de pedidos.
   - **Endpoints**:
     - `POST /orders` (Receber pedido)

4. **Módulo de Endereços**
   - **Funcionalidades**: Cadastro e listagem de endereços de entrega.
   - **Endpoints**:
     - `POST /addresses` (Cadastrar endereço)
     - `GET /addresses` (Listar endereços)

5. **Módulo de Relatórios**
   - **Funcionalidades**: Visualização de relatórios de vendas.
   - **Endpoints**:
     - `GET /reports` (Listar relatórios)

## Considerações Adicionais
- **Autenticação**: Implementar JWT para proteger as rotas que requerem autenticação.
- **Estrutura Modular**: Cada módulo deve ser organizado de forma a facilitar a manutenção e escalabilidade do sistema. 