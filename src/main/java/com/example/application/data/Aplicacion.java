package com.example.application.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.example.application.services.AplicacionService.AplicacionRecord;

@Entity
@Table(name = "aplicacion")
public class Aplicacion extends AbstractEntity {
  

    //nombre de la aplicación
    @NotBlank
    @NotNull    
    private String nombre;
    //descripción de la aplicación
    @NotBlank
    @NotNull
    
    private String codigo;        
    //relación N a N entre los perfiles y sus aplicaciones
    @ManyToMany(fetch = FetchType.LAZY,
      cascade = {
          CascadeType.PERSIST,
          CascadeType.MERGE
      },
      mappedBy = "aplicaciones")
    
    private Set<Perfil> perfiles = new HashSet<>();
    
    public Aplicacion() {
        this.perfiles = new HashSet<>();
    }

    
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

    public Set<Perfil> getPerfiles() {
        return perfiles;
    }
    
    public void setPerfiles(Set<Perfil> perfiles) {
        this.perfiles = perfiles;
    }
}
