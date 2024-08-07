package com.example.realestate.controller;

import com.example.realestate.model.Property;
import com.example.realestate.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/properties")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @GetMapping("/all")
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getPropertyById(@PathVariable Long id) {
        Optional<Property> property = propertyService.getPropertyById(id);
        if (property.isPresent()) {
            return ResponseEntity.ok(property.get());
        } else {
            return ResponseEntity.status(404).body("Property not found with id: " + id);
        }
    }

    @PostMapping("/add")
    public Property createProperty(@RequestBody Property property) {
        return propertyService.saveProperty(property);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateProperty(@PathVariable Long id, @RequestBody Property propertyDetails) {
        Optional<Property> property = propertyService.getPropertyById(id);
        if (property.isPresent()) {
            Property existingProperty = property.get();
            existingProperty.setLocation(propertyDetails.getLocation());
            existingProperty.setOwnerName(propertyDetails.getOwnerName());
            existingProperty.setContact(propertyDetails.getContact());
            existingProperty.setPrice(propertyDetails.getPrice());
            existingProperty.setSquareFt(propertyDetails.getSquareFt());
            propertyService.saveProperty(existingProperty);
            return ResponseEntity.ok("Property updated successfully.");
        } else {
            return ResponseEntity.status(404).body("Property not found with id: " + id);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProperty(@PathVariable Long id) {
        Optional<Property> property = propertyService.getPropertyById(id);
        if (property.isPresent()) {
            propertyService.deleteProperty(id);
            return ResponseEntity.ok("Property deleted successfully.");
        } else {
            return ResponseEntity.status(404).body("Property not found with id: " + id);
        }
    }

    @GetMapping("/search/{location}")
    public ResponseEntity<?> getPropertiesByLocation(@PathVariable String location) {
        List<Property> properties = propertyService.getPropertiesByLocation(location);
        if (properties.isEmpty()) {
            return ResponseEntity.status(404).body("No properties found in location: " + location);
        }
        return ResponseEntity.ok(properties);
    }
}
