

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="w-full px-4 py-8 footer">
        <p className="text-center font-semibold text-white">All rights reserved © Copyright {year} GreenForest </p>
    </footer>
  )
}

export default Footer