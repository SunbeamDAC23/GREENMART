package com.app.service;

import com.app.dto.AuthRequest;
import com.app.pojos.Admin;

public interface AdminService {
	
	Admin authenticateAdmin(AuthRequest request);

}
