import React from "react";


const CreateSong = (props) => {

    return (
    <form onSubmit={props.handleSubmit}>
      <label>title</label>
      <input name="title" onChange={props.handleChange} type="text" />
      <label>actor</label>
      <input name="actor" onChange={props.handleChange} type="text" />
      <label>Thumbnail</label>
      <input name="thumbnailURL" onChange={props.handleChange} type="text" />
      <label>Language</label>
      <select name="language" onChange={props.handleChange}>
        {props.languages.map((l) => (
          <option value={l.value}> {l.name}</option>
        ))}
      </select>
    </form>
  );
};
export default CreateSong;
