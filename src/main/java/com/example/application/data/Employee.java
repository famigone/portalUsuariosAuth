package com.example.application.data;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import dev.hilla.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity

public class Employee {

         @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //nombre del organismo
    @NotBlank
    private String nombre;
    //código del organismo
    @NotBlank
    private String codigo;
    //domicilio del organismo
    @NotBlank
    private String domicilio;    
    //telefono del organismo
    @NotBlank
    private String telefono;    
    
   
    
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