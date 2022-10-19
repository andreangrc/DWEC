public abstract class Alumno  {
    
    private String nombre;
    private String direccion;
    private String sexo;

    public Alumno(String nombre, String direccion, String sexo){
        this.nombre = nombre;
        this.direccion = direccion;
        this.sexo = sexo;
    }

    public String getNombre(){
        return nombre;
    }

    public void setNombre(){
        this.nombre = nombre;
    }

}