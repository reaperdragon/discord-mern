import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

const Label = styled("p")({
  color: "#b9bbbbe",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "16px",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393f",
  fontSize: "16px",
  margin: 0,
  padding: "0 5px",
});

const InputField = ({ value, setValue, label, type, placeholder }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default InputField;
