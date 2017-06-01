package com.bjchat;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {
    private Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(value=NoHandlerFoundException.class)
    @ResponseBody
    public String noHandlerFoundExceptionHandler(HttpServletRequest req, NoHandlerFoundException e) throws Exception{
    	logger.error("noHandlerFoundExceptionHandler:::",e);
		return "{\"status\":404,\"msg\":\"Page/Controller not found\"}";  	
    }
    
    /**
     * 系统异常处理，比如：404,500
     * @param req
     * @param resp
     * @param e
     * @return
     * @throws Exception
     */
    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public String defaultErrorHandler(HttpServletRequest req, HttpServletResponse res, Exception e) throws Exception {
        logger.error("", e);
        String error = "";
        if("no_login".equals(e.getMessage())){
        	res.sendRedirect("/");
        	logger.info("redirect to /");
        	return "{\"status\":500,\"msg\":\""+e.getCause().getMessage()+"\"}";
        }
        if(e.getClass().toString().equals("class org.springframework.web.servlet.NoHandlerFoundException")){
        	error="{\"status\":404,\"msg\":\"Page/Controller not found\"}";
        }else{
        	error = "{\"status\":500,\"msg\":\""+e.getCause().getMessage()+"\"}";
        }/*
        r.setMessage(e.getMessage());
        if (e instanceof org.springframework.web.servlet.NoHandlerFoundException) {
             r.setCode(404);
        } else {
             r.setCode(500);
        }
        r.setData(null);
        r.setStatus(false);*/
        return error;
    }
}