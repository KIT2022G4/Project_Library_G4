package com.projectcapstone.library.model;


import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.UUID;

@Data
@Entity
@Table(name = "orderbook")
public class OrderBook implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idorderbook;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "codedetailbook",nullable = false, referencedColumnName="codedetailbook"),
            @JoinColumn(name = "codebranch", nullable = false, referencedColumnName="codebranch"),
            @JoinColumn(name = "codebook", nullable = false, referencedColumnName="codebook")
    })
    private DetailBook detailbook;

    @ManyToOne
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
