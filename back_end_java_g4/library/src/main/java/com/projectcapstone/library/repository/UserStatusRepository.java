package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.UserStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserStatusRepository extends JpaRepository<UserStatus, Long> {
    @Query("select ub from UserStatus ub where ub.status = false and ub.timeupdate < current_date")
    List<UserStatus> listUserStatus();

}
