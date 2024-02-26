package com.example.application.services;

import com.example.application.data.Organismo;
import com.example.application.data.OrganismoRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;
import jakarta.validation.constraints.NotNull;


import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.stereotype.Service;

@Service
@AnonymousAllowed
@BrowserCallable
public class OrganismoService {

    private final OrganismoRepository repository;

    public record OrganismoRecord(            
            Long id,
            @NotNull String nombre,
            // código del organismo
            @NotNull String codigo,
            // domicilio del organismo
            @NotNull String domicilio,
            // telefono del organismo
            @NotNull String telefono) {
    }

    private OrganismoRecord toOrganismoRecord(Organismo orga) {
        return new OrganismoRecord(
                orga.getId(),
                orga.getNombre(),
                orga.getCodigo(),
                orga.getDomicilio(),
                orga.getTelefono());
    }

    public List<OrganismoRecord> findAllOrganismos() {
        return repository.findAll().stream()
                .map(this::toOrganismoRecord).toList();
    }

    public OrganismoService(OrganismoRepository repository) {
        this.repository = repository;
    }

    public Optional<Organismo> get(Long id) {
        return repository.findById(id);
    }

    public Organismo update(Organismo entity) {
        return repository.save(entity);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Page<Organismo> list(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public int count() {
        return (int) repository.count();
    }

    private OrganismoRecord saveOrganismo(OrganismoRecord nuevoOrganismo) {        
        // Crea un nuevo objeto Organismo y asigna los valores del objeto recibido
        Organismo dbOrganismo = new Organismo();        
        dbOrganismo.setNombre(nuevoOrganismo.nombre);
        dbOrganismo.setDomicilio(nuevoOrganismo.domicilio());
        dbOrganismo.setCodigo(nuevoOrganismo.codigo());
        dbOrganismo.setTelefono(nuevoOrganismo.telefono());

        // Guarda el nuevo organismo en la base de datos
        Organismo savedOrganismo = repository.save(dbOrganismo);

        // Devuelve el organismo guardado después de convertirlo a OrganismoRecord si es
        // necesario
        return toOrganismoRecord(savedOrganismo);
    }

    private OrganismoRecord updateOrganismo(OrganismoRecord elOrganismo) {
        var dbOrganismo = repository.findById(elOrganismo.id).orElseThrow();
        
        
        dbOrganismo.setNombre(elOrganismo.nombre);
        dbOrganismo.setDomicilio(elOrganismo.domicilio());
        dbOrganismo.setCodigo(elOrganismo.codigo());
        dbOrganismo.setTelefono(elOrganismo.telefono());

        // Guarda el nuevo organismo en la base de datos
        Organismo savedOrganismo = repository.save(dbOrganismo);

        // Devuelve el organismo guardado después de convertirlo a OrganismoRecord si es
        // necesario
        return toOrganismoRecord(savedOrganismo);
    }

    public OrganismoRecord save(OrganismoRecord elOrganismo) {
        OrganismoRecord rta;
        //var dbOrganismo = repository.findById(elOrganismo.id);
        if (elOrganismo.id == 0) 
            rta = this.saveOrganismo(elOrganismo);
        else 
           rta = this.updateOrganismo(elOrganismo); 
        return rta;    
    }

}
