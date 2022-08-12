package com.projectcapstone.library.model;


import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "orderbook")
public class OrderBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idorderbook;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumns({
            @JoinColumn(name = "codedetailbook", nullable = false, referencedColumnName="codedetailbook"),
            @JoinColumn(name = "codebranch", nullable = false, referencedColumnName="codebranch")
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

    @Column(columnDefinition = "boolean default false")
    private boolean status;
}
