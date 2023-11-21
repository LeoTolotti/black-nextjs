import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" legacyBehavior>
        <a className="navbar-brand">Início</a>
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/produtos" legacyBehavior>
          <a className="nav-link me-2">Produtos</a>
        </Link>
        <Link href="/carrinho" legacyBehavior>
          <a className="nav-link">Carrinho</a>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
