package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Integer> {
}
