package com.example.application.services;
import org.springframework.stereotype.Service;

import com.example.application.data.Employee;
import com.example.application.data.EmployeeRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.CrudRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class EmployeeService
       extends CrudRepositoryService<Employee, Long, EmployeeRepository> {
}