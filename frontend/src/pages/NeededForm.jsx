import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";

const NeededForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    categories: "",
    quantity: "",
    emergency: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Box p={4} bg="gray.50" borderRadius="md" boxShadow="md">
      <Heading mb={6}>Needed Form</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input name="location" value={formData.location} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Categories</FormLabel>
            <Input name="categories" value={formData.categories} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Quantity</FormLabel>
            <Input name="quantity" value={formData.quantity} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Emergency</FormLabel>
            <Input name="emergency" value={formData.emergency} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Contact Number</FormLabel>
            <Input name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="green">Submit</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default NeededForm;