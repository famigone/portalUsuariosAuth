package com.example.application.services;

import com.example.application.data.Organismo;
import com.example.application.data.OrganismoRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
@AnonymousAllowed
@BrowserCallable
public class OrganismoService {

    private final OrganismoRepository repository;

    
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

    public Page<Organismo> list(Pageable pageable, Specification<Organismo> filter) {
        return repository.findAll(filter, pageable);
    }

    public int count() {
        return (int) repository.count();
    }

}
