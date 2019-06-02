package com.pastpapers01.springboot.api.resourse;

import com.pastpapers01.springboot.api.document.Book;
import com.pastpapers01.springboot.api.repository.BookRepository;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest")
public class BookResource {

    double sum =0;
    private BookRepository bookRepository;

    public BookResource(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void calculateSum(String price){
        System.out.println(price);
        sum+=Double.parseDouble(price);
    }



    @GetMapping("/book")
    public String getAll(@RequestParam("data") String asd){

        String arr[];
        arr = asd.split(",");
        System.out.println(arr.length);
            List<Book> book = bookRepository.findAll();
        System.out.println(book.size());
            for(int i=0;i<book.size();i++){
                for(int j=0;j<arr.length;j++) {
                    System.out.println(book.get(i).getId());
                    if (book.get(i).getId()==Integer.parseInt(arr[j])){
                        sum+= Double.parseDouble(book.get(i).getPrice());
                    }
                }
            }

        return "Sum is: "+ sum;
    }
}
