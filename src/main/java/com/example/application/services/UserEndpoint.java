package com.example.application.services;

import com.example.application.data.Role;
import com.example.application.data.User;
import com.example.application.security.AuthenticatedUser;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotNull;

import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

@Endpoint
@AnonymousAllowed
public class UserEndpoint {
    public record UserRecord(
            Long id,
            String username,
            String name,
            String hashedPassword,
            Set<Role> roles,
            byte[] profilePicture) {
    }

    @Autowired
    private AuthenticatedUser authenticatedUser;

    public Optional<User> getAuthenticatedUser() {
        return authenticatedUser.get();
    }
}
