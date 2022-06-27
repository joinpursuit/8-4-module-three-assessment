import { Link } from "react-router-dom";
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav className="navigator">
      <article>
        <h1>
          <Link to="/">
            <img
              className="Totoro"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/94b16eab-4901-4ec0-8125-83309cb51f3c/d2kk8i9-da127a60-8339-4c97-a19e-a4ec35d30184.jpg/v1/fill/w_1280,h_1811,q_75,strp/totoro_by_autodach.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi85NGIxNmVhYi00OTAxLTRlYzAtODEyNS04MzMwOWNiNTFmM2MvZDJrazhpOS1kYTEyN2E2MC04MzM5LTRjOTctYTE5ZS1hNGVjMzVkMzAxODQuanBnIiwid2lkdGgiOiI8PTEyODAiLCJoZWlnaHQiOiI8PTE4MTEifV1dfQ.ONf0RLpJk2BkA9XFCOdm60w-soNiIHWJpYo1c7MMPtc"
              alt="Totoro"
            />
          </Link>
        </h1>
      </article>
      <ul className="linklist">
        <li>
          <Link className="pagelink" to="/movies">Movies</Link>
        </li>
        <li>
          <Link className="pagelink" to="/people">People</Link>
        </li>
        <li>
          <Link className="pagelink" to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;