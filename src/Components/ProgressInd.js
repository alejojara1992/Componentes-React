export default function App() {
    return (
      <>         
        <div className="progress">
          <progress value={0} />
          <progress value={0.5} />
          <progress value={0.7} />
          <progress value={75} max={100} />
          <progress value={1} />
          <progress value={null} />
        </div>
      </>
    );
  }