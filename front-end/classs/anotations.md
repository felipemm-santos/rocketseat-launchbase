# Coisas interessantes para lembrar depois

## Padding


* Quando recebe **um** parametro:

    O valor é aplicado as quatro propiedades: top , right , button e left.

    ```css
    padding: 20px;
    /*  
        padding-top: 20px
        padding-right: 20px
        padding-button: 20px
        padding-left: 20px
    */
    ```
* Quando recebe **dois** parametros:

    O primeiro valor é aplicado ao top e button , e o segundo ao right e left.

    ```css
    padding: 30px 20px;
    /* 
        padding-top: 30px
        padding-right: 20px
        padding-button: 30px
        padding-left: 20px
    */
    ```

* Quando recebe **três** parametros: 

    O primeiro valor é aplicado ao top o segundo ao right e left , e o terceiro ao button.

    ```css
    padding: 30px 20px 50px;
    /* 
        padding-top: 30px
        padding-right: 20px
        padding-button: 50px
        padding-left: 20px
    */
    ```
* Quando recebe **quatro** parametros:

    O primeiro valor é aplicado ao top o segundo ao right , o terceiro ao left , e o quarto ao button.

    ```css
    padding: 30px 20px 50px 10px;
    /* 
        padding-top: 30px
        padding-right: 20px
        padding-button: 50px
        padding-left: 10px
    */
    ```
