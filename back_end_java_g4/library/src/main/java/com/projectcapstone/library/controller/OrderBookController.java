package com.projectcapstone.library.controller;

import com.projectcapstone.library.model.OrderBook;
import com.projectcapstone.library.model.Rating;
import com.projectcapstone.library.repository.OrderBookRepository;
import com.projectcapstone.library.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class OrderBookController {
    @Autowired
    private OrderBookRepository orderBookRepository;

    @GetMapping("/oderBook")
    public List<OrderBook> getAllOrderBooks() {
        return orderBookRepository.findAll();
    }

    @GetMapping("/oderBookByCodeUser")
    public List<OrderBook> getAllOrderBooksByCodeUser(@RequestParam String codeUser) {
        return orderBookRepository.orderBookByCodeUser(codeUser);
    }
    @PostMapping("/oderBook")
    public OrderBook createOrderBook(@RequestBody OrderBook oderBook) {
        return orderBookRepository.save(oderBook);
    }
}
