function Input({text,placeholder,id}) {
return(

<div className="github-input-container">

  <label htmlFor="linkedinId">{text}</label>

  <div className="github-input-box">
    <span className="github-icon linkedin-icon">in</span>

    <input
      type="text"
      id={id}
      placeholder={placeholder}
    />
  </div>
</div>
);
}
export default Input;