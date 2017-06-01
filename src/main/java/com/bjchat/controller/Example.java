package com.bjchat.controller;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.bjchat.beans.Animal;
import com.bjchat.dao.TestDao;

@RestController  
@EnableAutoConfiguration  
public class Example{  
	@Autowired
    private TestDao testDao;
    @RequestMapping("/")  
    ModelAndView home() {  
    	Map<String,String> map = new HashMap<String,String>();
    	map.put("time", (new Date()).toString());
        return new ModelAndView("index",map);  
    }  
    @RequestMapping("/create/{catName}/{birth}")  
    Animal check(@PathVariable String catName,@PathVariable String birth ) { 
    	LocalDateTime date = LocalDateTime.now();
    	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd:HH:mm:ss");
    	Animal animal = new Animal();
    	animal.setName(catName);
    	date = LocalDateTime.parse(birth+":00:00:00",dtf);
    	animal.setBirth(date);
    	//Animal a = testDao.findOne((long)id);
    	testDao.save(animal);
        return animal;  
    } 
    
    @RequestMapping("/findOne/{id}")  
    Animal check(@PathVariable Integer id ) { 
    	Animal animal = testDao.findOne((long)id);
        return animal;  
    }  
      
    @RequestMapping("/hello/{myName}")  
    String index(@PathVariable String myName) {  
        return "Hello "+myName+"!!!";  
    }

}  