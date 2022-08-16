package com.projectcapstone.library.controller;

import com.projectcapstone.library.model.Rating;
import com.projectcapstone.library.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class RatingController {
    @Autowired
    private RatingRepository ratingRepository;

    @GetMapping("/rating")
    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    @PostMapping("/rating")
    public Rating createRating(@RequestBody Rating rating) {
        return ratingRepository.save(rating);
    }
}
