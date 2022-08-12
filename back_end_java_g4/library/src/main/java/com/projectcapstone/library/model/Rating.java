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
    @JoinColumn(name = "codeuser", nullable = false, referencedColumnName="codeuser")
    private User user;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "codebook", nullable = false, referencedColumnName="codebook")
    private Book book;

    @Column(columnDefinition = "DATE DEFAULT (CURRENT_DATE)")
    private Date dor;

}
