const Languageoption = (props) => {
  return (
    <div>
      <select
        onChange={props.onChange}
        style={{ marginleft: "0px" }}
        className="mx-auto d-block text-danger py-2 "
      >
        {/* <option>Select Language</option> */}
        <option value={"en"}>English</option>
        <option value={"chi"}>Chinese</option>
        <option value={"hi"}>Hindi</option>
        <option value={"ar"}>Arabic</option>
      </select>
    </div>
  );
};
export default Languageoption;
