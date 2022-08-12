package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
