package com.projectcapstone.library.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
@Table(name = "detailbook")
public class DetailBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer iddetailbook;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idbook", nullable = false)
    private Book book;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "branch", nullable = false)
    private Branch branch;

    @OneToMany(mappedBy = "detailbook", cascade = CascadeType.ALL)
    private List<OrderBook> orderBookList;
}
