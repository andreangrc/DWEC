/* La Encapsulación: contiene toda la información de un objeto y oculta los datos de tal forma que 
sólo sean accesibles mediante operaciones definidas por el propio objeto.*/

public class bicicleta {
    /* En este caso ocultamos los datos marca y color con private */
    private String marca;
    private String color;

    // GETTERS Y SETTERS
    public String getMarca(){
        return marca;
    }

    public void setMarca(){
        this.marca = marca;
    }
    
    public String getColor(){
        return color;
    }

    public void setColor(){
        this.color = color;
    }

    public bicicleta(String marca, String color){
        this.marca = marca;
        this.capacidad = capacidad;
    }
}