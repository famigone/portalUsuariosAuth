package com.example.application.services;

import com.example.application.data.Aplicacion;
import com.example.application.data.AplicacionRepository;
import com.example.application.data.Aplicacion;
import com.example.application.services.AplicacionService.AplicacionRecord;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;
import jakarta.validation.constraints.NotNull;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
@AnonymousAllowed
@BrowserCallable
public class AplicacionService {

    private final AplicacionRepository repository;
    public record AplicacionRecord(
            Long id,
            //nombre de la aplicación
            @NotNull String nombre,
            // código del aplicación
            @NotNull String codigo
            ) {
    }

    private AplicacionRecord toAplicacionRecord(Aplicacion app) {
        return new AplicacionRecord(
            app.getId(),
            app.getNombre(),
            app.getCodigo()
            );
                
    }
    public List<AplicacionRecord> findAllAplicaciones() {
        return repository.findAll().stream()
                .map(this::toAplicacionRecord).toList();
    }

    public AplicacionService(AplicacionRepository repository) {
        this.repository = repository;
    }

    public Optional<Aplicacion> get(Long id) {
        return repository.findById(id);
    }


    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Page<Aplicacion> list(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Page<Aplicacion> list(Pageable pageable, Specification<Aplicacion> filter) {
        return repository.findAll(filter, pageable);
    }

    public int count() {
        return (int) repository.count();
    }

    private AplicacionRecord saveAplicacion(AplicacionRecord nuevaAplicacion) {        
        // Crea un nuevo objeto Aplicacion y asigna los valores del objeto recibido
        Aplicacion dbAplicacion = new Aplicacion();        
        dbAplicacion.setNombre(nuevaAplicacion.nombre);        
        dbAplicacion.setCodigo(nuevaAplicacion.codigo);        

        // Guarda el nuevo organismo en la base de datos
        Aplicacion savedAplicacion = repository.save(dbAplicacion);

        // Devuelve el organismo guardado después de convertirlo a AplicacionRecord si es
        // necesario
        return toAplicacionRecord(savedAplicacion);
    }

    private AplicacionRecord updateAplicacion(AplicacionRecord laAplicacion) {
        var dbAplicacion = repository.findById(laAplicacion.id).orElseThrow();
        
        
        dbAplicacion.setNombre(laAplicacion.nombre);
        dbAplicacion.setCodigo(laAplicacion.codigo);
        

        // Guarda el nuevo organismo en la base de datos
        Aplicacion savedAplicacion = repository.save(dbAplicacion);

        // Devuelve el organismo guardado después de convertirlo a AplicacionRecord si es
        // necesario
        return toAplicacionRecord(savedAplicacion);
    }

    public AplicacionRecord save(AplicacionRecord laAplicacion) {
        AplicacionRecord rta;
        //var dbAplicacion = repository.findById(elAplicacion.id);
        if (laAplicacion.id == 0) 
            rta = this.saveAplicacion(laAplicacion);
        else 
           rta = this.updateAplicacion(laAplicacion); 
        return rta;    
    }

}
