function Entry(props) {
    return (
      <pre>{JSON.stringify(props, null, 2)}</pre>
    )
  }
  
  export default Entry
  