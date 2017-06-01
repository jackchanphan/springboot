package com.bjchat.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController  
@EnableAutoConfiguration  
public class UploadController {
	@RequestMapping(value="/upload",method=RequestMethod.POST)
	String upload(){
		return "uploaded";
	}
}
