# JAVASCRIPT


> *BOLETÍN JS3 AVANZADO* ☝️


---


## 🔎  ANÁLISIS DEL PROBLEMA.

### JUEGO TIMBIRICHE 🕹️
Estos son los pasos y apartados que debemos seguir para este juego:

      1. Realizar el juego del Timbiriche en el navegador mediante Javascript, 
      apoyándose de la documentación suministrada. Las reglas del juego serán las siguientes:
      
         - El tablero tendrá 9 puntos.
         - Cada jugador solo debe colocar una raya de su color por turno.
         - No se puede colocar la misma raya más de una vez.
         - El juego termina cuando no quedan más opciones.
         - Un jugador podrá conseguir un Cuadrado cuando en su turno complete la raya faltante de un cuadrado.
         - El ganador de la partida será aquel que complete más cuadrados.
         
      2. El ganador de la partida sumará un punto a su contador y aparecerá un aviso de si se quiere volver a jugar.
      
      3. Diseñar el plan de pruebas y grabar con .gif la evidencia de su ejecución manual.


Tras analizar el problema y ver que debo hacer para hacer este juego, he visto ejemplos y la mayoría de personas lo hacen con Canvas.

## -> CANVAS✒️
        <canvas id="tutorial" width="150" height="150"></canvas>


A primera vista, un elemento `canvas` es parecido al elemento `img`, con la diferencia que este no tiene los atributos src y alt. 
El elemento `canvas` tiene solo dos atributos: `width y height`. Ambos son opcionales y pueden ser definidos usando propiedades DOM.
Cuando los atributos ancho y alto no estan especificados, el lienzo se inicializara con 300 pixels ancho y 150 pixels de alto. 
El elemento puede ser arbitrariamente redimensionado por CSS, pero durante el renderizado la imagen es escalada para ajustarse al tamaño de su layout. 
Si el tamaño del CSS no respeta el ratio del canvas inicial, este aparecerá distorsionado.



## -> DOM 📰
Las siglas DOM significan `Document Object Model`, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra.

En Javascript, cuando nos referimos al DOM nos referimos a esta estructura, que podemos modificar de forma dinámica desde Javascript.



            
---



## ✏️ DISEÑO DE LA SOLUCIÓN.

Para realizar este apartado de Tarea AVANZADA, lo primero que he hecho es poner en práctica todo lo buscado en `Análisis del problema`. 
A continuación, he buscado ejemplos de como hacer un tablero en canvas y de como realizar el juego y finalmente he realizado el diagrama de flujo.


### DIAGRAMA DE FLUJO 📈

![UML1](recursos/UML.PNG)


---





## 📝 IMPLEMENTACIÓN.

En este apartado vamos a ponernos a implementar todos los apartados anteriores, vamos a hacer el juego completo, el plan de pruebas y los gifs de cada prueba.


---




## 📹 PRUEBAS.


### --> Plan de pruebas 📰

![PlanPruebas](recursos/PlanPruebas.PNG)


---

### --> GIFS:



![GIF1](recursos/GIF1.gif)

                                                                       TESTID 1: Gana jugador 1.



---
![GIF2](recursos/GIF2.gif)

                                                                       TESTID 2: Gana jugador 2.
                                          
                                          
                                          
                                          
---
![GIF3](recursos/GIF3.gif)

                                                                        TESTID 3: Empate.


                                  



