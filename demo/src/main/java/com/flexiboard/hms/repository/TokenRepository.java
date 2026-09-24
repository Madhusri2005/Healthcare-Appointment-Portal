
package com.flexiboard.hms.repository;

import com.flexiboard.hms.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TokenRepository extends JpaRepository<Token, Long> {
    long countByDepartment(String department);
    List<Token> findByStatusNot(String status);
}