package com.ledgerline.backend.dto;

import java.util.List;

import com.ledgerline.backend.entity.Transaction;

public class DashboardResponse {

    private double totalIncome;
    private double totalExpense;
    private double balance;
    private List<Transaction> recentTransactions;

    public DashboardResponse() {
    }

    public DashboardResponse(double totalIncome, double totalExpense,
                             double balance,
                             List<Transaction> recentTransactions) {
        this.totalIncome = totalIncome;
        this.totalExpense = totalExpense;
        this.balance = balance;
        this.recentTransactions = recentTransactions;
    }

    public double getTotalIncome() {
        return totalIncome;
    }

    public void setTotalIncome(double totalIncome) {
        this.totalIncome = totalIncome;
    }

    public double getTotalExpense() {
        return totalExpense;
    }

    public void setTotalExpense(double totalExpense) {
        this.totalExpense = totalExpense;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public List<Transaction> getRecentTransactions() {
        return recentTransactions;
    }

    public void setRecentTransactions(List<Transaction> recentTransactions) {
        this.recentTransactions = recentTransactions;
    }
}