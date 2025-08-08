import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";

export function Number({ placeholder, min, max, onChange, ...props }: React.ComponentProps<"input">) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9.-]/g, "");
    if (value && min !== undefined && +value < +min) value = String(min);
    if (value && max !== undefined && +value > +max) value = String(max);
    e.target.value = value;
    // Call both onInput and onChange if provided
    if (props.onInput) props.onInput(e);
    if (onChange) onChange(e);
  };

  return (
    <div className="space-y-1">
      {placeholder ? <Label>{placeholder}</Label> : null}
      <Input
        type="text"
        min={min}
        max={max}
        {...props}
        onInput={handleInput}
        onChange={onChange}
      />
    </div>
  );
}
