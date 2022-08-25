package com.projectcapstone.library.repository;

import com.projectcapstone.library.model.Book;
import com.projectcapstone.library.model.DetailBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DetailBookRepository extends JpaRepository<DetailBook, Long> {
    @Query(value = "select db from DetailBook db where db.status = true and db.book.idbook = ?1 and db.branch.idbranch = ?2 group by db.book.codebook")
    DetailBook detailBookTop(Long idBook, Long idBranch);

    @Query(value = "select db from DetailBook db where db.status = true and db.book.idbook = ?1 and db.branch.idbranch = ?2")
    List<DetailBook> detailBook(Long idBook, Long idBranch);

    @Query(value = "select db.book.codebook from DetailBook db where db.branch.codebranch = ?1 group by db.book.codebook")
    List<String> listCodeBookOnBranch(String codeBranch);

    @Query(value = "SELECT db.branch.codebranch FROM DetailBook db where db.book.codebook = ?1 group by db.branch.codebranch")
    List<String> listCodeBranch(String codeBook);
}
