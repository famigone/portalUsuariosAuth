package com.example.application.services;

import com.example.application.data.Aplicacion;
import com.example.application.data.AplicacionRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;

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

    public AplicacionService(AplicacionRepository repository) {
        this.repository = repository;
    }

    public Optional<Aplicacion> get(Long id) {
        return repository.findById(id);
    }

    public Aplicacion update(Aplicacion entity) {
        return repository.save(entity);
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

}
