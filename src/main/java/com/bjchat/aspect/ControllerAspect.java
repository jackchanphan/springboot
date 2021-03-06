package com.bjchat.aspect;

import java.io.IOException;
import java.time.LocalDateTime;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.bjchat.beans.User;;

/**
 * Created by jiaobuchong on 12/23/15.
 */
@Aspect   //定义一个切面
@Configuration
public class ControllerAspect {
	
	Logger logger = LoggerFactory.getLogger(ControllerAspect.class);
    // 定义切点Pointcut
    @Pointcut("execution(* com.bjchat.controller..*.*(..))")
    public void excuteService() {
    }
    
    @Before("execution(* com.bjchat.controller..*.*(..))")
    public void doBeforeAdvice(JoinPoint jp) throws Exception{  
        RequestAttributes ra = RequestContextHolder.getRequestAttributes();
        ServletRequestAttributes sra = (ServletRequestAttributes) ra;
        HttpServletRequest request = sra.getRequest();
        HttpServletResponse response =  sra.getResponse();
        User ani = (User) request.getSession().getAttribute("login_user");
        if(null==ani && !"/".equals(request.getRequestURI())
        		&& request.getRequestURI().indexOf("/login/")==-1 && request.getRequestURI().indexOf("/error")==-1){
        	throw new Exception("no_login");
        }
    }
    
    
    @After("execution(* com.bjchat.controller..*.*(..))")
    public void doAfterAdvice(JoinPoint jp) throws IOException, ServletException{  
        RequestAttributes ra = RequestContextHolder.getRequestAttributes();
        ServletRequestAttributes sra = (ServletRequestAttributes) ra;
        HttpServletRequest request = sra.getRequest();
        HttpServletResponse response =  sra.getResponse();
        User ani = (User) request.getSession().getAttribute("login_user");
        if(null==ani && !"/".equals(request.getRequestURI())
        		&& request.getRequestURI().indexOf("/login/")==-1 && request.getRequestURI().indexOf("/error")==-1){
        	//response.sendRedirect("/");
        }
    }
    
    @Around("execution(* com.bjchat.controller..*.*(..))")
    public Object doAround(ProceedingJoinPoint pjp) throws Throwable {
        RequestAttributes ra = RequestContextHolder.getRequestAttributes();
        ServletRequestAttributes sra = (ServletRequestAttributes) ra;
        HttpServletRequest request = sra.getRequest();
        
        String date = LocalDateTime.now().toString();
        String ip = request.getRemoteHost();
        String url = request.getRequestURL().toString();
        String method = request.getMethod();
        String uri = request.getRequestURI();
        String sesseionId = request.getSession().getId();
        String queryString = request.getQueryString();
        logger.info("sessionId-->"+sesseionId+"\tIP-->"+ip+"\tURL-->"+url+"\tMETHOD-->"+method+"\tURI-->"+uri+"\tQUERYSTRING-->"+queryString+"\tTIMESTAMP-->"+date);;
        return pjp.proceed();
    }
}