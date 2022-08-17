package com.projectcapstone.library.schedule;


import com.projectcapstone.library.model.OrderBook;
import com.projectcapstone.library.model.UserStatus;
import com.projectcapstone.library.repository.OrderBookRepository;
import com.projectcapstone.library.repository.UserStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.List;

@Component
public class ScheduledTasks {
    @Autowired
    private UserStatusRepository userStatusRepository;

    @Autowired
    private OrderBookRepository orderBookRepository;


//    @Scheduled(fixedDelay = 1000)
//    public void updateUserStatus(){
//        List<OrderBook> orderBookList = orderBookRepository.listOrderBookLate();
//        Date now = new Date(new java.util.Date().getTime());
//        for(OrderBook ob:orderBookList){
//            UserStatus us = userStatusRepository.getById(ob.getUser().getIduser());
//            System.out.println(ob.toString());
//            if(us.getTimeupdate().before(now)){
//                us.setCrime(us.getCrime() + 1);
//                us.setTimeupdate(now);
//                us.setStatus(false);
//                userStatusRepository.save(us);
//            }
//        }
//
//        List<UserStatus> userStatusList = userStatusRepository.listUserStatus();
//        for (UserStatus us:userStatusList){
//            Integer check = us.getCrime() - 1;
//            if(check > 0){
//                us.setCrime(check);
//                us.setTimeupdate(now);
//            }else {
//                us.setCrime(0);
//                us.setStatus(true);
//                us.setTimeupdate(now);
//            }
//            userStatusRepository.save(us);
//        }
//    }
}
