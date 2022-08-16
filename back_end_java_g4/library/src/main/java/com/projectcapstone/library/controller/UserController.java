package com.projectcapstone.library.controller;


import com.projectcapstone.library.model.User;
import com.projectcapstone.library.repository.UserRepository;
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
        return userRepository.save(user);
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
