export default function Footer() {
  return (
    <>
      <footer>
        © {new Date().getFullYear()} Tomoya Furukawa
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 86px;
          //border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo {
          height: 1em;
          margin: 5px;
        }
      `}</style>
    </>
  )
}
