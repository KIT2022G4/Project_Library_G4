package com.projectcapstone.library.controller;


import com.projectcapstone.library.model.User;
import com.projectcapstone.library.model.UserStatus;
import com.projectcapstone.library.repository.UserRepository;
import com.projectcapstone.library.repository.UserStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserStatusRepository userStatusRepository;

    @GetMapping("/user")
    public List < User > getAllUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/user/{id}")
    public ResponseEntity< User > getUserById(@PathVariable Long id) {
        User user = userRepository.findById(id).orElseThrow();;
        return ResponseEntity.ok(user);
    }
    @PutMapping("/user/{id}")
    public ResponseEntity < User > updateUser(@PathVariable Long id, @RequestBody User userDetail) {
        User user = userRepository.findById(id).orElseThrow();
        user.setFullname(userDetail.getFullname());
        user.setEmail(userDetail.getEmail());
        user.setAddress(userDetail.getAddress());
        user.setPhone(userDetail.getPhone());
        user.setUrlimage(userDetail.getUrlimage());

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity <Map< String, Boolean >> deleteEmployee(@PathVariable Long id) {
        User employee = userRepository.findById(id).orElseThrow();

        userRepository.delete(employee);
        Map < String, Boolean > response = new HashMap< >();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/user")
    public User createEmployee(@RequestBody User user) {
        User u = userRepository.save(user);
        if(user.getRole().getIdrole() < 4){
            UserStatus us = new UserStatus();
            us.setIduser(u.getIduser());
            us.setStatus(true);
            us.setTimeupdate(new java.sql.Date(new java.util.Date().getTime()));
            us.setCrime(0);
            if(u.getRole().getIdrole() == 1 || u.getRole().getIdrole() == 3){
                us.setRemainingbook(3);
            }
            if(u.getRole().getIdrole() == 2){
                us.setRemainingbook(5);
            }
            userStatusRepository.save(us);
        }
        return u;
    }

    @GetMapping("/login")
    public User loaduser(@RequestParam String username, @RequestParam String password){
        return userRepository.login(username,password);
    }

    @PutMapping("/changePassword")
    public ResponseEntity < User > updateUserPassword(@PathVariable Long id, @PathVariable String password) {
        User user = userRepository.findById(id).orElseThrow();
        user.setPassword(password);

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

}
