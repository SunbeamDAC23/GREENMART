package com.app.customExceptions;

public class ApiException extends RuntimeException{
	
	public ApiException(String mesg)
	{
		super(mesg);
	}

}
