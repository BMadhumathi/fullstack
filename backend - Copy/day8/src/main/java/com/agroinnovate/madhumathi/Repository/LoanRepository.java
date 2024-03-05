package com.agroinnovate.madhumathi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agroinnovate.madhumathi.model.Loan;

public interface LoanRepository extends JpaRepository<Loan, String> {
    
}
