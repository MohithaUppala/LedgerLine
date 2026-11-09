package com.ledgerline.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ledgerline.backend.entity.Transaction;
import com.ledgerline.backend.repository.TransactionRepository;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    // Add Transaction
    public Transaction addTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    // Get All Transactions
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    // Delete Transaction
    public void deleteTransaction(Long id) {
        transactionRepository.deleteById(id);
    }
}