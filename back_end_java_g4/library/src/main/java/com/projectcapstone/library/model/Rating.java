package com.projectcapstone.library.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.Check;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Table(name = "rating")
@Check(constraints = "rt between 0 and 5")
public class Rating implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idrating;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "codeuser", nullable = false, referencedColumnName="codeuser")
    private User user;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "codebook", nullable = false, referencedColumnName="codebook")
    private Book book;

    @Column(columnDefinition = "DATE DEFAULT (CURRENT_DATE)")
    private Date dor;

    @Column(columnDefinition = "Text")
    private String comment;

    private Float rt;

}
