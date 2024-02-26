package com.example.application.data;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

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
    @ManyToMany
    @JoinTable(
        name = "relacion_aplicaciones_perfilusuarios",
        joinColumns = @JoinColumn(name = "aplicacion_id",  nullable = false),
        inverseJoinColumns = @JoinColumn(name = "perfiUsuario_id",  nullable = false)
    )    

    private Set<Perfil> perfiles = new HashSet<>();
    
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

}
