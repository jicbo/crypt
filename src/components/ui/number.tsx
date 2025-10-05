import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import React from "react";

interface NumberInputProps extends Omit<React.ComponentProps<typeof Input>, 'type' | 'onChange' | 'value'> {
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number | undefined) => void;
}

export function Number({ placeholder, min, max, step, value, onChange, ...props }: NumberInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let parsedValue: number | undefined;

    if (inputValue === "") {
      parsedValue = undefined;
    } else {
      const num = parseFloat(inputValue);
      if (!isNaN(num)) {
        parsedValue = num;
      } else {
        return;
      }
    }

    if (parsedValue !== undefined) {
      if (min !== undefined && parsedValue < min) {
        parsedValue = min;
      }
      if (max !== undefined && parsedValue > max) {
        parsedValue = max;
      }
    }

    if (onChange) {
      onChange(parsedValue);
    }
  };

  return (
    <div className="space-y-1">
      {placeholder ? <Label>{placeholder}</Label> : null}
      <Input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value !== undefined ? String(value) : ""}
        onChange={handleInputChange}
        {...props}
      />
    </div>
  );
}
