const theme = {
  color: {
    primary: "#FF385CFF",
    secondary: "#00848A",
  },
  text: {
    color: {
      primary: "#484848",
      secondary: "#222",
    }
  },
  mixin: {
    boxShadow: `
    transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,.18);
    }`
  }
}

export default theme