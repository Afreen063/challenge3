export default function InputDate(props) {
  return (
    <div
      style={{
        fontFamily: "nunito",
        fontWeight: "200",
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
        width: "30%",
        margin: "auto",
        gap: "10px",
      }}
    >
      <label htmlFor="from-date-picker">{props.label}:</label>

      <input
        id="from-date-picker"
        type="datetime-local"
        value={props.date}
        disabled={props.disabled}
        onChange={(e) => {
          props.setFromDate(e.target.value);
        }}
      />
    </div>
  );
}
