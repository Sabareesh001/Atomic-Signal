import { useState } from "react";
import StyledInputLabel from "../../components/inputLabel/inputLabel";
import StyledSelect from "../../components/select/select";
import {
  StyledToggleButton,
  StyledToggleButtonGroup,
} from "../../components/toggleButton/styledToggleButton";
import { FilterFormContainer, FilterFormField } from "./team.styles";

const roleFilters = ["Employee", "Manager", "Admin"];

const performanceFilters = [
  "Impactful",
  "Spectacular",
  "Very good",
  "Good",
  "Need to Improve",
  "Need to improve a lot",
  "Completely away",
];

const FilterForm = () => {
  const [performanceFiltersSelected, setPerformanceFiltersSelected] = useState(
    Array(performanceFilters.length).fill(false)
  );
  const [roleFiltersSelected, setRoleFiltersSelected] = useState(
    Array(roleFilters).fill(false)
  );
  return (
    <FilterFormContainer>
      <FilterFormField>
        <StyledInputLabel>Overall Performance</StyledInputLabel>
        <StyledToggleButtonGroup>
          {performanceFilters.map((data, i) => (
            <StyledToggleButton
              disableRipple
              onClick={() => {
                setPerformanceFiltersSelected((prev) => {
                  const newPrev = [...prev];
                  newPrev[i] = !newPrev[i];
                  return newPrev;
                });
              }}
              size="small"
              selected={performanceFiltersSelected[i]}
            >
              {data}
            </StyledToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </FilterFormField>
      <FilterFormField>
        <StyledInputLabel>Department</StyledInputLabel>
        <StyledSelect size="small" placeholder="Select"></StyledSelect>
      </FilterFormField>
      <FilterFormField>
        <StyledInputLabel>Designation</StyledInputLabel>
        <StyledSelect size="small" placeholder="Select"></StyledSelect>
      </FilterFormField>
      <FilterFormField>
        <StyledInputLabel>Reporting to</StyledInputLabel>
        <StyledSelect size="small" placeholder="Name"></StyledSelect>
      </FilterFormField>
      <FilterFormField>
        <StyledInputLabel>Overall Performance</StyledInputLabel>
        <StyledToggleButtonGroup>
          {roleFilters.map((data, i) => (
            <StyledToggleButton
              disableRipple
              onClick={() => {
                setRoleFiltersSelected((prev) => {
                  const newPrev = [...prev];
                  newPrev[i] = !newPrev[i];
                  return newPrev;
                });
              }}
              size="small"
              selected={roleFiltersSelected[i]}
            >
              {data}
            </StyledToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </FilterFormField>
    </FilterFormContainer>
  );
};

export default FilterForm;
