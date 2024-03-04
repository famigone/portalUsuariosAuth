package com.example.application.data;


import java.util.List;
import java.util.Set;
import java.util.stream.Stream;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.helger.commons.email.EmailAddress;

public interface AplicacionRepository extends JpaRepository<Aplicacion, Long>, JpaSpecificationExecutor<Aplicacion> {
    List<Aplicacion> findByPerfilesContains (Perfil perfil);
    
   // List<Aplicacion> findAplicacionesByPerfiles(Long id);    
   @Query("SELECT a FROM Aplicacion a JOIN perfiles p WHERE p.id = :perfilId")  
   List<Aplicacion> findAplicacionByPerfiles_Id(long perfilId);

   //List<Aplicacion> findAplicacion(@Param("perfilId") Long perfilId); 

//@Query("SELECT a FROM Aplicacion a JOIN a.perfiles p WHERE p.id = :perfilId")
//List<Aplicacion> findAplicacionesByPerfilId(@Param("perfilId") Long perfilId);

Aplicacion getAplicacionById(Long id);

}