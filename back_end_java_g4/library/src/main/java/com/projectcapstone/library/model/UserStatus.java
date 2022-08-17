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
    @Column(name = "iduser")
    private long iduser;

    @OneToOne(optional = false)
    @PrimaryKeyJoinColumn(name = "iduser", referencedColumnName = "iduser")
    private User user;

    private Integer remainingbook;

    @Column(columnDefinition = "boolean default true")
    private boolean status;

    @Column(columnDefinition = "int default 0")
    private Integer crime;

    @Column(columnDefinition = "DATE DEFAULT (CURRENT_DATE)")
    private Date timeupdate;


}
