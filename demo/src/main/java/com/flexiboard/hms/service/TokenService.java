
package com.flexiboard.hms.service;

import com.flexiboard.hms.repository.TokenRepository;
import org.springframework.stereotype.Service;

@Service
public class TokenService {
    private final TokenRepository tokenRepository;

    public TokenService(TokenRepository tokenRepository) {
        this.tokenRepository = tokenRepository;
    }

    public String generateOddToken(String department) {
        // Count existing tokens for this department to determine sequence
        long count = tokenRepository.countByDepartment(department);

        // Logic: (Count * 2) + 1 -> 0*2+1=1, 1*2+1=3, 2*2+1=5...
        long oddNumber = (count * 2) + 1;

        String deptCode = department.substring(0, 3).toUpperCase();
        return deptCode + "-" + oddNumber;
    }
}