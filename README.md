# cypress-basico-v2

Documentação do curso de cypress básico

## Pré-requisitos

<div align="center">
	<table>
		<tr>
			<td><code><img width="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git"/></code></td>
			<td><code><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code></td>
			<td><code><img width="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm"/></code></td>
			<td><code><img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/></code></td>
			<td><code><img width="50" src="https://user-images.githubusercontent.com/68279555/200387386-276c709f-380b-46cc-81fd-f292985927a8.png" alt="Cypress" title="Cypress"/></code></td>
		</tr>
	</table>
</div>

É necessário utilizar o Cypress, Git, Node.Js e npm para a realização dos reste

> Foi utilizada a versão `20.11.0` do Node.js e a versão `10.2.4` do npm. Recomendo que se utilize as mesmas versões ou posteriores.

## Instalação

Execute `npm install` (ou `npm i`) para instalar as dev dependencies do projeto

## Testes

Você pode rodar os testes simulando a visão de desktop ou mobile

### Desktop

Execute `npm test` (ou `npm t` ) para rodar no modo headless (sem interface gráfica) na visão de desktop.

Ou execute `npm run cy:open` para abrir o Cypress no modo interativo na visão de desktop

### Mobile

> Execute `npm run test:mobile` para rodar os testes na interface mobile

> Ou execute `npm run cy:open:mobile` para rodar os testes mobiles na interface gráfica.

