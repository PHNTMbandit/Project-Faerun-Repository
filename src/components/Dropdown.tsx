export function Dropdown({ optionList, onChange }: any) {
  return (
    <form>
      <select
        name="selected"
        defaultValue={"default"}
        onChange={onChange}>
        <option
          disabled
          value="default">
          Select a race
        </option>
        {optionList.map((option: any, key: any) => (
          <option
            value={option.name}
            key={key}>
            {option.name}
          </option>
        ))}
      </select>
    </form>
  );
}
