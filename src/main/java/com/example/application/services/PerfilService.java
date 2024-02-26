package com.example.application.services;
import com.example.application.data.Perfil;
import com.example.application.data.Role;
import com.example.application.data.PerfilRepository;
import com.example.application.data.User;
import com.example.application.data.UserRepository;
import com.example.application.data.Perfil.Tipo;
import com.example.application.services.OrganismoService.OrganismoRecord;
import com.example.application.data.Organismo;
import com.example.application.data.OrganismoRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AnonymousAllowed
@BrowserCallable
public class PerfilService {

    private final PerfilRepository perfilRepository;
    private final OrganismoRepository organismoRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public record PerfilRecord(
             Long id,            
            @NotNull String nombre,
            @NotNull String apellido,
            @NotNull String dni,
            @NotNull String domicilio,
            @NotNull String telefono,
            @NotNull String email,   
            @NotNull Tipo tipo,                        
            @NotNull OrganismoRecord organismo,
            @NotNull String username,   
            @NotNull String pass   ,
            @NotNull Role role
            //           User user
            ) {
    }


    public PerfilService(PerfilRepository perfilRepository, 
                         OrganismoRepository organismoRepository,
                         UserRepository userRepository,
                         PasswordEncoder passwordEncoder
                         ) {
        this.perfilRepository = perfilRepository;
        this.organismoRepository = organismoRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
       
    }

    private PerfilRecord toPerfilRecord(Perfil perfil) {
        return new PerfilRecord(
            perfil.getId(),
            perfil.getNombre(),
            perfil.getApellido(),
            perfil.getDni(),                                    
            perfil.getDomicilio(),
            perfil.getTelefono(),
            perfil.getEmail(),
            perfil.getTipo(),
            new OrganismoRecord(
                perfil.getOrganismo().getId(), 
                perfil.getOrganismo().getNombre(),
                perfil.getOrganismo().getCodigo(), 
                perfil.getOrganismo().getDomicilio(),
                perfil.getOrganismo().getTelefono()
                ),
            perfil.getUsername(),
            perfil.getPass(),        
            perfil.getRole()    
            
            );
                
    }

    public List<PerfilRecord> findAllPerfiles() {
                List<Perfil> all = perfilRepository.findAllWithOrganismo();
                return all.stream()
                        .map(this::toPerfilRecord).toList();                
    }



    public Optional<Perfil> get(Long id) {
        return perfilRepository.findById(id);
    }


    public void delete(Long id) {
        perfilRepository.deleteById(id);
    }

    public Page<Perfil> list(Pageable pageable) {
        return perfilRepository.findAll(pageable);
    }

    //public Page<Perfil> list(Pageable pageable, Specification<Perfil> filter) {
    //    return perfilRepository.findAll(filter, pageable);
    //}

    public int count() {
        return (int) perfilRepository.count();
    }

    public User registrarNuevoUsuario(String username, String password, String name, Set<Role> roles) throws Exception {
        // Verificar si el usuario ya existe
    /*     if (userRepository.findByUsername(username) != null) {
            throw new Exception("El nombre de usuario ya está en uso.");
        }
*/
        // Codificar la contraseña antes de almacenarla
        String hashedPassword = passwordEncoder.encode(password);

        // Crear un nuevo usuario
        User newUser = new User();
        newUser.setUsername(username);        
        newUser.setHashedPassword(hashedPassword);
        newUser.setName(name);
        newUser.setRoles(roles);

        // Almacenar el usuario en la base de datos
        return userRepository.save(newUser);
    }

    private PerfilRecord savePerfil(PerfilRecord nuevoPerfil) throws Exception {  
                
        // Crea un nuevo objeto Perfil y asigna los valores del objeto recibido
        Perfil dbPerfil = new Perfil(); 
        var organismo = organismoRepository.findById(nuevoPerfil.organismo.id() ).orElseThrow();             
        dbPerfil.setNombre(nuevoPerfil.nombre);                   
        dbPerfil.setApellido(nuevoPerfil.apellido);
        dbPerfil.setDni(nuevoPerfil.dni);
        dbPerfil.setDomicilio(nuevoPerfil.domicilio);
        dbPerfil.setTelefono(nuevoPerfil.telefono);
        dbPerfil.setEmail(nuevoPerfil.email);
        dbPerfil.setTipo(nuevoPerfil.tipo);
        dbPerfil.setOrganismo(organismo);           

        // Crea un User y asigna los valores recibidos
        //creamos un set con el rol del usuario
        Set<Role> roles = Collections.singleton(Role.USER);
        
        User elUsuario= this.registrarNuevoUsuario( 
                nuevoPerfil.username,
                nuevoPerfil.pass,
                nuevoPerfil.nombre,
                roles);
        dbPerfil.setUser(elUsuario);        
        // Guarda el nuevo organismo en la base de datos
        Perfil savedPerfil = perfilRepository.save(dbPerfil);
        // Devuelve el organismo guardado después de convertirlo a PerfilRecord si es
        // necesario
        return toPerfilRecord(savedPerfil);
    }

    private PerfilRecord updatePerfil(PerfilRecord elPerfil) {
        var dbPerfil = perfilRepository.findById(elPerfil.id).orElseThrow();   
        var organismo = organismoRepository.findById(elPerfil.organismo.id() ).orElseThrow();             
        dbPerfil.setNombre(elPerfil.nombre);                   
        dbPerfil.setApellido(elPerfil.apellido);
        dbPerfil.setDni(elPerfil.dni);
        dbPerfil.setDomicilio(elPerfil.domicilio);
        dbPerfil.setTelefono(elPerfil.telefono);
        dbPerfil.setEmail(elPerfil.email);
        dbPerfil.setTipo(elPerfil.tipo);
        dbPerfil.setOrganismo(organismo);
        // Guarda el nuevo organismo en la base de datos
        Perfil savedPerfil = perfilRepository.save(dbPerfil);
        // Devuelve el organismo guardado después de convertirlo a PerfilRecord        
        return toPerfilRecord(savedPerfil);
    }

    public PerfilRecord save(PerfilRecord elPerfil) throws Exception {
        PerfilRecord rta;
        //var dbPerfil = perfilRepository.findById(elPerfil.id);
        if (elPerfil.id == 0) 
            rta = this.savePerfil(elPerfil);
        else 
           rta = this.updatePerfil(elPerfil); 
        return rta;    
    }

}
