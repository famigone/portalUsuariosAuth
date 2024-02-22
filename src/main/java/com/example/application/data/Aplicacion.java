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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "aplicacion")
public class Aplicacion extends AbstractEntity {
    //nombre de la aplicación
    private String nombre;
    //descripción de la aplicación
    private String descripcion;    
    //link a la aplicación
    private String link;    
    //imágen para la aplicación
    @Lob
    @Column(length = 1000000)
    private byte[] aplicacionPicture;

     //relación N a N entre los usuarios y sus aplicaciones
    @ManyToMany
    @JoinTable(
        name = "relacion_aplicaciones_usuarios",
        joinColumns = @JoinColumn(name = "aplicacion_id",  nullable = false),
        inverseJoinColumns = @JoinColumn(name = "user_id",  nullable = false)
    )    
    private Set<User> usuarios = new HashSet<>();
    
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.descripcion = nombre;
    }
    public String getLink() {
        return link;
    }
    public void setLink(String link) {
        this.link = link;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
                        
    public byte[] getAplicacionPicture() {
        return aplicacionPicture;
    }
    public void setProfilePicture(byte[] aplicacionPicture) {
        this.aplicacionPicture = aplicacionPicture;
    }

}
