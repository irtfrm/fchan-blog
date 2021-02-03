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
          font-size: 86%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}
