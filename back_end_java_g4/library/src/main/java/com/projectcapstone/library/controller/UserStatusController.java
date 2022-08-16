package com.projectcapstone.library.controller;

import com.projectcapstone.library.model.Rating;
import com.projectcapstone.library.model.UserStatus;
import com.projectcapstone.library.repository.RatingRepository;
import com.projectcapstone.library.repository.UserStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserStatusController {
    @Autowired
    private UserStatusRepository userStatusRepository;

    @GetMapping("/userStatus")
    public List<UserStatus> getAllUserStatus() {
        return userStatusRepository.findAll();
    }

    @PostMapping("/userStatus")
    public UserStatus createUserStatus(@RequestBody UserStatus userStatus) {
        return userStatusRepository.save(userStatus);
    }
}
