package com.ledgerline.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ledgerline.backend.dto.DashboardResponse;
import com.ledgerline.backend.entity.Transaction;
import com.ledgerline.backend.repository.TransactionRepository;

@Service
public class DashboardService {

    private final TransactionRepository transactionRepository;

    public DashboardService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public DashboardResponse getDashboardData() {

        List<Transaction> transactions = transactionRepository.findAll();

        double totalIncome = 0;
        double totalExpense = 0;

        for (Transaction transaction : transactions) {
            if ("INCOME".equalsIgnoreCase(transaction.getType())) {
                totalIncome += transaction.getAmount();
            } else if ("EXPENSE".equalsIgnoreCase(transaction.getType())) {
                totalExpense += transaction.getAmount();
            }
        }

        double balance = totalIncome - totalExpense;

        return new DashboardResponse(
                totalIncome,
                totalExpense,
                balance,
                transactions
        );
    }
}