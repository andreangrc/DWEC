/* El polimorfismo es una propiedad por la cual el método invocado varía en 
función de la clase de la instancia de un objeto.*/

public class Instrumentos {    
    public void sonidoQueEmite() {
        System.out.println("tilin, tilin...");
    }
}

 /* Definimos una clase 'Instrumentos' que tiene el método "sonitoqueemite", y luego
 creamos dos clases hijas: Guitarra y tambor */

class Guitarra extends Instrumentos {
    public void sonidoQueEmite() {
        System.out.println("sonido de tambor");
    }
}


class Tambor extends Instrumentos {
    public void sonidoQueEmite() {
        System.out.println("sonido de guitarra");
    }
}

/* Ambas clases pueden utilizar el método "sonidoqueemite" pero la implementación de 
éstas emiten sonidos distintos */



