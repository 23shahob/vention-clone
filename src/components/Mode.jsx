import * as React from "react";
import Switch from "@mui/material/Switch";

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="fixed rounded-full bottom-5 left-5 z-20 bg-[#29292B]">
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
}
