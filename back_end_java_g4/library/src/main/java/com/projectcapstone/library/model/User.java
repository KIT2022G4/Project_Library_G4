package com.projectcapstone.library.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer iduser;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(columnDefinition = "varchar(50) default '123456'")
    private String password;

    private String fullname;

    private String email;

    @Column(columnDefinition = "varchar(255) default 'https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg'")
    private String urlimage;

    @Column(columnDefinition = "int default 1" )
    private Integer role;

    @Column(nullable = false, unique = true)
    private String codeuser;

    @Column(columnDefinition = "boolean default true")
    private boolean status;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<BookEntry> bookEntryList;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Rating> ratingList;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<OrderBook> orderBookList;


}
