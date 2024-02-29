package com.example.application.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.application.data.Aplicacion;
public interface PerfilRepository extends JpaRepository<Perfil, Long> {

    @Query("SELECT p FROM Perfil p JOIN FETCH p.organismo")
    List<Perfil> findAllWithOrganismo();
   // List<Aplicacion> findByPerfilId(Long id);
 
}
