# At-rules

*Está relacionado ao comportamento do CSS
*Começa com o sinal de `@`seguido do identificador e valor

## Exemplos comuns

-@import  /* incluir um CSS externo */

-@media /* regras condicionais para dispositivos */

-@font-face /* fontes externas */

-@keyframes /* Animation */

``` css
@import "https://local.com/style.css";

@media (min-width: 500px) {
    /* regras aqui */
};

@font-face {
    /* regras aqui */
}

@keyframes nameofanimation {
    /* regras aqui */
}
```