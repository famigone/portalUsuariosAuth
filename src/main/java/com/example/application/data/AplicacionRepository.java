package com.example.application.data;


import java.util.List;
import java.util.stream.Stream;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.helger.commons.email.EmailAddress;

public interface AplicacionRepository extends JpaRepository<Aplicacion, Long>, JpaSpecificationExecutor<Aplicacion> {
    List<Aplicacion> findByPerfilesContains (Perfil perfil);
}