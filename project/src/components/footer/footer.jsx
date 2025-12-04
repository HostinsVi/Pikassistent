import './footer.css';

function Footer({state}) {
  
  return (
      <footer className={state === 'absolute' ? 'absoluteFooter' : null}>
        <p>© 2025 Pikassistent, Pokémon and Pokémon character names are trademarks of Nintendo.</p>
      </footer>
  )
}

export default Footer;