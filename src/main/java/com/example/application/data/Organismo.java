package com.example.application.data;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.annotation.Nullable;

import java.util.LinkedList;
import java.util.List;

@Entity
@Table(name = "organismo")
public class Organismo extends AbstractEntity {

    // nombre del organismo
    @NotBlank
    @NotNull

    private String nombre;
    // código del organismo    
    @NotNull
    @NotBlank
    private String codigo;
    // domicilio del organismo
    @NotBlank
    @NotNull

    private String domicilio;
    // telefono del organismo
    @NotBlank
    @NotNull

    private String telefono;

    // usuarios del organismo
    @OneToMany(mappedBy = "organismo")
    @Nullable
    private List<Perfil> perfiles = new LinkedList<>();

    public List<Perfil> getPerfiles() {
        return perfiles;
    }

    public void setPerfiles(List<Perfil> perfiles) {
        this.perfiles = perfiles;
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
