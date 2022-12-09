export default function Toolbar() {
  return (
    <div className="Toolbar" onInput={() => {
      console.log('toolbar!');
    }}>
      <input type="text" />
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}