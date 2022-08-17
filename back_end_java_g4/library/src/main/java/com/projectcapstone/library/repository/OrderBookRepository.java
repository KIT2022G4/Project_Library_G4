package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.OrderBook;
import com.projectcapstone.library.model.User;
import com.projectcapstone.library.model.UserStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface OrderBookRepository extends JpaRepository<OrderBook, Long> {
    @Query("select odb from OrderBook odb where odb.user.iduser = ?1 ")
    List<OrderBook> orderBookByCodeUser(Long codeUser);

    @Query("select odb from OrderBook odb where odb.datetime < current_date and odb.status = 2")
    List<OrderBook> listOrderBookLate();

}
