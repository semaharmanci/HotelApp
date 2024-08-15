import { Link } from "react-router-dom";
import Container from "../Container";

const Header = () => {
  return (
    <header className="border-b">
      <Container designs="flex justify-between p-5">
        <div className="flex gap-10">
          <h1 className="font-bold text-xl">Tripster</h1>
          <nav className="flex gap-5 items-center">
            <Link to="/">Oteller</Link>
            <Link className="max-md:hidden" to="/">
              Popüler
            </Link>
            <Link to="/admin/create">Olustur</Link>
          </nav>
        </div>
        <div className="flex flex-items-center gap-2">
          <button className="border border-blue-500 rounded-full py-1 px-5 max-md:hidden">
            Kayit Ol
          </button>
          <button className="bg-blue-500 text-white rounded-full py-1 px-5">
            Giris Yap
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
