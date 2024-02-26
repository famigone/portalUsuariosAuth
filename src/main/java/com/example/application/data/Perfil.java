package com.example.application.data;
import jakarta.annotation.Nullable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import com.example.application.data.Role;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Perfil extends AbstractEntity {

    private String nombre;

    private String apellido;
    
 
    private String username;

    private String pass;
    private Role role;

    @OneToOne
    private User user;
  
    @Column(unique = true)
    private String dni;

    private String domicilio;

    @Column(unique = true)
    private String telefono;

    @Column(unique = true)
    private String email;

    //relación N a 1 con el organismo
    @ManyToOne
    private Organismo organismo;

    // relación N a N con las aplicaciones
    @ManyToMany(mappedBy = "perfiles")
    @Nullable
    private Set<Aplicacion> perfil_aplicaciones = new HashSet<>();

    public enum Tipo {
        INTERNO,
        EXTERNO
    }

    private Tipo tipo;

    public Perfil() {

    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String name) {
        this.nombre = name;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getDomicilio() {
        return domicilio;
    }

    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Tipo getTipo() {
        return tipo;
    }

    public void setTipo(Tipo tipo) {
        this.tipo = tipo;
    }

    public Organismo getOrganismo() {
        return this.organismo;
    }

    public void setOrganismo(Organismo organismo) {
        this.organismo = organismo;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

     public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
