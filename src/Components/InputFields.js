export const InputField = ({ label, ...props }) => (
  <div className="inputDiv">
    <label className="inputLabel">
      {label}
      <input
        {...props}
        value={props.value || ""}
        required
        className="inputField"
      />
    </label>
  </div>
);
