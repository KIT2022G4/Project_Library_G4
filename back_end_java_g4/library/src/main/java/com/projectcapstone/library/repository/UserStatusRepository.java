package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.UserStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserStatusRepository extends JpaRepository<UserStatus, Long> {
}
