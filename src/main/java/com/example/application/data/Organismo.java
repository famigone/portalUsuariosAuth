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
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "organismo")
public class Organismo extends AbstractEntity {
    //nombre del organismo
    private String nombre;
    //código del organismo
    private String codigo;
    //domicilio del organismo
    private String domicilio;    
    //telefono del organismo
    private String telefono;    
    
    //usuarios del organismo
    @OneToMany(mappedBy = "organismo")
    private List<User> usuarios;
    
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getCodigo() {
        return codigo;
    }
    public void setCodigo(String codigo) {
        this.codigo = codigo;
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

   

}
