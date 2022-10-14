/*CLASE PERSONA - Clase Base de la jerarquía*/
public class Persona {
    private String nombre;
    private int edad;

    //CONSTRUCTOR POR DEFECTO
    public Persona() {
    }

    //CONSTRUCTOR DE UN PARÁMETRO
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
        System.out.println("Constructor de Persona " + nombre + edad);
    }
   
    //GETTERS Y SETTERS
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    //MÉTODOS
    public void caminar(){

    }

    public void respirar(){

    }

    //método toString()
    //devuelve un String formado por la palabra “Persona” y el nombre de Persona
    @Override
    public String toString() {
        return "Persona " + nombre;
    }
}



/* CLASE JOVEN */
public class Joven extends Persona{
    //constructor por defecto
    public Joven() {
    }
    //constructor con un parámetro
    public Joven(String nombre, int edad) {
        super(nombre);
        super(edad);
        System.out.println("Constructor de Joven");
    }
    //modificación del método toString() para mostrar el mensaje adecuado
    @Override
    public String toString() {
        return super.toString() + " -> Joven";
    }
}