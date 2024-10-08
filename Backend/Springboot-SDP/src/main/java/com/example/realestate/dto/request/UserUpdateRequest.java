package com.example.realestate.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UserUpdateRequest {
    private String name;
    private String email;
    private String phone;
    private String address;
}
