# Front-App

O `front-app` será a interface para os clientes realizarem pedidos. As funcionalidades principais incluem:

## Funcionalidades

1. **Cadastro e Login de Clientes (opcional)**
   - Tela de cadastro para novos clientes (se implementado).
   - Tela de login para clientes existentes (se implementado).

2. **Listagem de Restaurantes**
   - Tela para listar todos os restaurantes disponíveis.
   - Opção para filtrar por tipo de cozinha.

3. **Visualização do Cardápio**
   - Tela para visualizar o cardápio de um restaurante selecionado.
   - Opção para adicionar itens ao carrinho.

4. **Finalização do Pedido**
   - Tela para revisar o pedido e inserir informações de entrega.
   - Integração com o endpoint `POST /orders` para enviar o pedido.

5. **Gerenciamento de Endereços**
   - Tela para cadastrar e gerenciar endereços de entrega (`POST /addresses` e `GET /addresses`).

6. **Notificações de Status do Pedido**
   - Notificações em tempo real sobre o status do pedido (pendente, em preparação, concluído). 