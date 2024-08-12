package com.example.realestate.auth;

import com.example.realestate.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UserResponse {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private Role role;
    public void setRole(String string) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setRole'");
    }
}