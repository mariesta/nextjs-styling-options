export default function Home() {
  return (
    <div className="component">
      <style jsx>{`
        .component {
          font-size: 16px;
          text-align: center;
        }

        .component:hover {
          color: red;
        }
      `}</style>
      <p>I am a component styled with CSS-in-JS</p>
    </div>
  )
}
