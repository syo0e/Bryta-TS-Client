
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav className="nav">
        <Link to="/">
          <div className="nav-logo">
            <img className="logo-img" alt="img" />
            <span className="logo-text">Bryta</span>
          </div>
        </Link>
        <div className="nav-search">
          <input type="text" placeholder="배우를 검색해주세요." />
          <button className="nav-search-icon">🔍</button>
          {/*임시돋보기 .. 배우상세페이지로 이동*/}
        </div>
        <div className="nav-right">
          <Link to="/mypage">
            <div className="nav-mypage">mypage</div>
          </Link>
          <Link to="/login">
            <div className="login">login</div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;