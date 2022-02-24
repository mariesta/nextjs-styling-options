export default function Home() {
  return (
    <div className="paragraph">
      <style jsx>{`
        .paragraph {
          font-size: 16px;
          text-align: center;
        }

        .paragraph:hover {
          color: red;
        }
      `}</style>
      <p>I am a component styled with Styled-JSX</p>
    </div>
  )
}
