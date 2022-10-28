# JAVASCRIPT


> *BOLETÍN JS1 AVANZADO* ☝️



---




## 🔎 Análisis del problema.


Se requieren crear un script de JavaScript que contenga un método de generación de datos de una tabla expuesta a la web con el método ‘document.write(variable);’.
A continuación, se deberá representar en un HTML todos los datos que se generen en el método previamente generado para rellenar los datos de una tabla HTML.

Primero vamos a analizar cada uno de los términos y saber su definición:
## -> <script>
  El elemento HTML Script (<script>) se utiliza para insertar o hacer referencia a un script ejecutable dentro de un documento HTML o XHTML.

  Los scripts sin atributo async o defer, así como las secuencias de comandos en línea, son interpretados y ejecutados inmediatamente, antes de que el navegador        continúe procesando la página.
  
## -> document.write()
  El método document.write() escribe una cadena de texto en un flujo de documentos abierto por document.open().
  
  > Ejemplo:
  
      <html lang="en">
      <head>
        <title>Write example</title>

        <script>
          function newContent() {
            document.open();
            document.write("<h1>Out with the old, in with the new!</h1>");
            document.close();
          }
        </script>
      </head>

      <body onload="newContent();">
        <p>Some original document content.</p>
      </body>
    </html>
  





---



## ✏️ Diseño de la solución.

Para realizar este apartado de Tarea AVANZADA, lo primero que he hecho es buscar información sobre 




**Estos son los UML necesarios para la solución:**

![UML1](images/UMLPolimorfismo.PNG)

                                                          UML Ejemplo Polimorfismo
                                                

![UML2](images/UMLHerencia.PNG)

                                                           UML Ejemplo Herencia




---





## 📝 Implementación de la solución.

En este apartado vamos a ponernos a implementar todo el diseño del apartado anterior y hacer los ejemplos de cada uno.


---




## 💡 Pruebas.

![Foto Encapsulamiento](images/Captura2.PNG)

                                                                   Prueba Encapsulación en Java



---




![Foto Abstracción 1](images/Captura4.PNG)

                                                                   Prueba 1 Abstracción en Java



---






![Foto Abstracción 1](images/Captura5.PNG)

                                                                   Prueba 2 Abstracción en Java



---





![Foto Herencia](images/Captura3.PNG)
![Foto Herencia](images/Captura3_1.PNG)

                                                                   Prueba Herencia en Java
                                                                   
                                                                   
                                                                   
                                                                   
 ---

![Foto Polimorfismo](images/Captura1.PNG)

                                                                   Prueba Polimorfismo en Java
