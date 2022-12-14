package com.projectcapstone.library.controller;

import com.projectcapstone.library.model.Book;
import com.projectcapstone.library.model.UserStatus;
import com.projectcapstone.library.repository.UserStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1")
public class UserStatusController {
    @Autowired
    private UserStatusRepository userStatusRepository;

    @GetMapping("/userStatus")
    public List<UserStatus> getAllUserStatus() {
        return userStatusRepository.findAll();
    }

    @GetMapping("/userStatus/{id}")
    public ResponseEntity< UserStatus > getBookById(@PathVariable Long id) {
        UserStatus userStatus = userStatusRepository.findById(id).orElseThrow();
        return ResponseEntity.ok(userStatus);
    }
}
