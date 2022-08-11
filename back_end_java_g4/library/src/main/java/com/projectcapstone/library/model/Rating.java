package com.projectcapstone.library.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Table(name = "rating")
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idrating;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "iduser")
    private User user;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idbook")
    private Book book;

    @Column(columnDefinition = "DATE DEFAULT (CURRENT_DATE)")
    private Date dor;

}
