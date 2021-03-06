package com.bjchat.controller.user;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.bjchat.beans.User;
import com.bjchat.controller.BaseController;
import com.bjchat.dao.TestDao;
import com.bjchat.dao.UserDao;

@RestController
public class LoginController {
	@Autowired
	UserDao userDao ;
	@RequestMapping(value="/login/{username}/{psw}")
	public String login(@PathVariable String username,@PathVariable String psw){
        RequestAttributes ra = RequestContextHolder.getRequestAttributes();
        ServletRequestAttributes sra = (ServletRequestAttributes) ra;
        HttpServletRequest request = sra.getRequest();
        HttpServletResponse response =  sra.getResponse();
		Logger logger = LoggerFactory.getLogger(getClass());
		logger.info(username+":::::"+psw);
		User user = new User();
		user.setUsername(username);
		user.setPassword(psw);
		userDao.save(user);
		request.getSession().setAttribute("login_user", user);
		return "ok";
	}

}
