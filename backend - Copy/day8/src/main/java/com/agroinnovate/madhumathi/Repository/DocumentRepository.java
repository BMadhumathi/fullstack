package com.agroinnovate.madhumathi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agroinnovate.madhumathi.model.Document;

import java.util.Optional;

public interface DocumentRepository extends JpaRepository<Document, String> {
   
}
