package com.pastpapers01.springboot.api.repository;

import com.pastpapers01.springboot.api.document.Book;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BookRepository extends MongoRepository<Book, Integer> {
}
