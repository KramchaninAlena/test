import logo from './icon.svg';

export const SearchBar = ({ level, topic, onChange, onReset }) => {
  return (
    <div>
      <input
        type="text"
        value={topic}
        onChange={evt => onChange(evt.target.value, 'topic')}
        placeholder="Topic"
      />
      <select
        name=""
        id=""
        value={level}
        onChange={evt => onChange(evt.target.value, 'level')}
      >
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <button onClick={onReset}>Reset filters</button>
      {/* <Logo size={16}/> */}
      <img src={logo} width="50px" alt="Logo" />
    </div>
  );
};
