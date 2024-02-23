package com.example.application.services;
import org.springframework.stereotype.Service;

import com.example.application.data.Organismo;
import com.example.application.data.OrganismoCrudRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.CrudRepositoryService;


@BrowserCallable
@AnonymousAllowed
public class OrganismoCrudService
       extends CrudRepositoryService<Organismo, Long, OrganismoCrudRepository> {
}