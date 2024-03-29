package com.agroinnovate.madhumathi.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.agroinnovate.madhumathi.dto.request.LoanRequest;
import com.agroinnovate.madhumathi.dto.response.LoanResponse;
import com.agroinnovate.madhumathi.model.Loan;
import com.agroinnovate.madhumathi.Repository.LoanRepository;
import com.agroinnovate.madhumathi.service.LoanService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoanServiceImpl implements LoanService {
    
    private final LoanRepository loanRepository;

    @Override
    public boolean addLoan(Loan loan) {
        loanRepository.save(loan);
        return true;
    }
    @Override
    public List<Loan> readLoan() {
        return loanRepository.findAll();
    }
    @Override
    public LoanResponse applyLoan(LoanRequest request) {
        var loan = Loan.builder()
                                .loanType(request.getLoanType())
                                .userAadharNumber(request.getUserAadharNumber())
                                .userPanNumber(request.getUserPanNumber())
                                .salary(request.getSalary())
                                .loanAmount(request.getLoanAmount())
                                .loanRepaymentMonth(request.getLoanRepaymentMonth())
                                .loanStatus(request.getLoanStatus())
                                .build();
                loanRepository.save(loan);
                return LoanResponse.builder()
                                .message("Loan Applied Successfully!")
                                .build();
    }
    @Override
    public boolean updatedLoanStatus(String loanId, String loanStatus) {
        Optional<Loan> optionalLoan = loanRepository.findById(loanId);
        if (optionalLoan.isPresent()) {
            Loan loan = optionalLoan.get();
            loan.setLoanStatus(loanStatus);
            loanRepository.save(loan);
            return true;
        } 
        else {
            return false;
        }
}

}