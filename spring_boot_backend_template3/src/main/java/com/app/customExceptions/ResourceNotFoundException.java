package com.app.customExceptions;

public class ResourceNotFoundException extends RuntimeException{
	
	public ResourceNotFoundException(String mesg)
	{
		super(mesg);
	}

}
