# Guitar-Hero

Anotações para criar bolinhas:

A primeira Sheet (a com as claves) possui 1000 px e 600px,
A sheet padrão possui 800px e 600px;
As bolinhas possuem 50px 39px

As sheets começam a aparecer em 1300px (1800 - (1000/2))

Configuração Bolinha:
Para configurar as notas coloca o height (segundo valor) nestes valores
                        Do - Height: 268
                        Ré - Height: 250px
                        Mi - Height: 232px
                        Fa - Height: 213px
                        Sol - Height: 195px
                        La - Height: 176px
                        Si - Height: 157px

                        Do - Height: 140px
                        Re - Height: 122px
                        Mi - Height: 103px
                        Fa - Height: 85px
                        Sol - Height: 67px

Para configurar o width pega o valor da primeira sheet (está configurado em 1800px) e tire 250px
Porque tirar 250?
Simples, o Phaser 'spawna' os objetos com o centro do objeto como referência, a width da primeira sheet (clavas) é de 1000px, já a da bolinha é de 50px.
Para 'spawnar' a bolinha no começo da clave você deve tirar a metade do valor da sheet e adicionar metade do valor da bolinha que daria 475.
Contudo, a primeira clava possui uma área não utilizável que é de 205px, então pegamos esse valor e mais 20 de margem e subtraímos que dá os 250. =)
