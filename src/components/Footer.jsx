const Footer = ({ length }) => {
    const today = new Date();

  return (
    <footer>
        <p>
          {length} List  {length > 1 ? 'items' : 'item'}
        </p>
    </footer>
  )
}

export default Footer