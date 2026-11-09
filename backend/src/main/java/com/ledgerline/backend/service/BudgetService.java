package com.ledgerline.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ledgerline.backend.entity.Budget;
import com.ledgerline.backend.repository.BudgetRepository;

@Service
public class BudgetService {

    private final BudgetRepository budgetRepository;

    public BudgetService(BudgetRepository budgetRepository) {
        this.budgetRepository = budgetRepository;
    }

    // Add Budget
    public Budget addBudget(Budget budget) {
        return budgetRepository.save(budget);
    }

    // Get All Budgets
    public List<Budget> getAllBudgets() {
        return budgetRepository.findAll();
    }

    // Delete Budget
    public void deleteBudget(Long id) {
        budgetRepository.deleteById(id);
    }
}