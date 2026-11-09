package com.ledgerline.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ledgerline.backend.entity.Budget;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long> {

}