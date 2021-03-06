package com.bjchat.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorAttributes;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class BaseController implements ErrorController{
    @Autowired
    private ErrorAttributes errorAttributes;
	final static String ERROR_PATH = "/error";
	public BaseController(){
		super();
	}
	 @RequestMapping(value = ERROR_PATH, produces = "text/html")
	    public ModelAndView errorHtml(HttpServletRequest request) {
	        return new ModelAndView("error", getErrorAttributes(request, false));
	    }

	    /**
	     * Supports other formats like JSON, XML
	     * @param request
	     * @return
	     */
	    @RequestMapping(value = ERROR_PATH)
	    @ResponseBody
	    public ResponseEntity<Map<String, Object>> error(HttpServletRequest request) {
	        Map<String, Object> body = getErrorAttributes(request, getTraceParameter(request));
	        HttpStatus status = getStatus(request);
	        return new ResponseEntity<Map<String, Object>>(body, status);
	    }

	    /**
	     * Returns the path of the error page.
	     *
	     * @return the error path
	     */
	    @Override
	    public String getErrorPath() {
	        return ERROR_PATH;
	    }


	    private boolean getTraceParameter(HttpServletRequest request) {
	        String parameter = request.getParameter("trace");
	        if (parameter == null) {
	            return false;
	        }
	        return !"false".equals(parameter.toLowerCase());
	    }

	    private Map<String, Object> getErrorAttributes(HttpServletRequest request,
	                                                   boolean includeStackTrace) {     
	        WebRequest requestAttributes = new ServletWebRequest(request); 
	        Map<String, Object> map = this.errorAttributes.getErrorAttributes( requestAttributes,includeStackTrace);  
	        String URL = request.getRequestURL().toString();
	        map.put("URL", URL);        
	        return map;
	    }

	    private HttpStatus getStatus(HttpServletRequest request) {
	        Integer statusCode = (Integer) request
	                .getAttribute("javax.servlet.error.status_code");
	        if (statusCode != null) {
	            try {
	                return HttpStatus.valueOf(statusCode);
	            }
	            catch (Exception ex) {
	            }
	        }
	        return HttpStatus.INTERNAL_SERVER_ERROR;
	    }   
	
}
