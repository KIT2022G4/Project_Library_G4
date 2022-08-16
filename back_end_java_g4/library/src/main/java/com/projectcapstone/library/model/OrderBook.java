package com.projectcapstone.library.model;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Date;
import java.util.UUID;

@Entity
@Table(name = "orderbook")
public class OrderBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idorderbook;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumns({
            @JoinColumn(name = "codedetailbook",nullable = false, referencedColumnName="codedetailbook"),
            @JoinColumn(name = "codebranch", nullable = false, referencedColumnName="codebranch"),
            @JoinColumn(name = "codebook", nullable = false, referencedColumnName="codebook")
    })
    private DetailBook detailbook;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "codeuser", nullable = false, referencedColumnName="codeuser")
    private User user;

    @Column(columnDefinition = "DATE DEFAULT (CURRENT_DATE)")
    private Date starttime;

    @Column(columnDefinition = "DATE")
    private Date datetime;

    @Column(columnDefinition = "DATE")
    private Date endtime;

    private Integer status;
}
