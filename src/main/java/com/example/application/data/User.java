package com.example.application.data;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.annotation.Nullable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "application_user")
public class User extends AbstractEntity {

    private String username;
    private String name;
    private String apellido;
    private String dni;
    private String domicilio;
    private String telefono;
    private String email;
    @ManyToOne
    @JoinColumn(name = "codigo")
    private Organismo organismo;
   // private Organismo organismo;
    
    @JsonIgnore
    private String hashedPassword;
    @Enumerated(EnumType.STRING)
    @ElementCollection(fetch = FetchType.EAGER)
    private Set<Role> roles;
    @Lob
    @Column(length = 1000000)
    private byte[] profilePicture;
   
    //relación N a N con el usuario
    @ManyToMany(mappedBy = "usuarios")
    @Nullable
    private Set<Aplicacion> user_aplicaciones = new HashSet<>();

    public enum Tipo {
        INTERNO,
        EXTERNO
    }
    private Tipo tipo; 
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getHashedPassword() {
        return hashedPassword;
    }
    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }
    public Set<Role> getRoles() {
        return roles;
    }
    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
    public byte[] getProfilePicture() {
        return profilePicture;
    }
    public void setProfilePicture(byte[] profilePicture) {
        this.profilePicture = profilePicture;
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
    

}
