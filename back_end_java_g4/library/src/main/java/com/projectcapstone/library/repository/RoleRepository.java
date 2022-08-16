package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
