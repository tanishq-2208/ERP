package com.repatikosam.ERP.dto;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AdminSignupDTO {
    private String userId;
    private String password;
    private String name;
    private String email;
    private String phone;
}
