package com.jack.test1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;


public class BaseController {
	public BaseController(){
		checkAuth();
	}
	public boolean checkAuth() {
		return false;
	}
}