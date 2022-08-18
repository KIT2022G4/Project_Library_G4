package com.projectcapstone.library.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "user")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long iduser;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(columnDefinition = "varchar(50) default '123456'")
    private String password;

    private String fullname;

    private String email;

    private String phone;

    private String address;

    @Column(columnDefinition = "varchar(255) default 'https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg'")
    private String urlimage;

    @ManyToOne
    @JoinColumn(name = "role", nullable = false ,referencedColumnName = "idrole")
    private Role role;

    @Column(nullable = false, unique = true)
    private String codeuser;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<BookEntry> bookEntryList;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Rating> ratingList;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<OrderBook> orderBookList;

    @OneToOne(mappedBy = "user",cascade = CascadeType.ALL)
    @JsonIgnore
    private UserStatus userStatus;
}
