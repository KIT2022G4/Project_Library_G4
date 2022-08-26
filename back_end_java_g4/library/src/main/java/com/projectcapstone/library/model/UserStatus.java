package com.projectcapstone.library.model;



import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
@Data
@Entity
@Table(name = "userstatus")
public class UserStatus implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @OneToOne
    @JoinColumn(name = "iduser")
    private User user;

    private Integer remainingbook;

    @Column(columnDefinition = "boolean default true")
    private boolean status;

    @Column(columnDefinition = "int default 0")
    private Integer crime;

    @Column(columnDefinition = "DATE DEFAULT (CURRENT_DATE)")
    private Date timeupdate;


}
