import Song from "./song";

const Songs = (props) => {
  return props.songsData.map((s) => <Song data={s} key={s.id} />);
};
export default Songs;
