package com.jack.test1.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jack.test1.beans.Animal;

@RestController  
@EnableAutoConfiguration  
public class Example {  
      
    @RequestMapping("/")  
    String home() {  
        return "Hello World!";  
    }  
    
    @RequestMapping("/check/{catName}/{id}/")  
    Animal check(@PathVariable String catName,@PathVariable Integer id ) { 
    	Animal animal = new Animal();
    	animal.setName(catName);
    	animal.setBirth(id.toString());
        return animal;  
    }  
      
    @RequestMapping("/hello/{myName}")  
    String index(@PathVariable String myName) {  
        return "Hello "+myName+"!!!";  
    }  
}  