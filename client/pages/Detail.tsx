// import '../css/Detail.css';
import Actor from '@components/actor/Actor';
import ActorProfile from '../components//actor/ActorProfile';
import Movie from '@components/Movie';
export default function Detail() {
  return (
    <div id="detail-container">
      <section className="detail-actor">
        <div className="detail-actor-about">
          <Actor />
          <ActorProfile />
        </div>
        <div className="detail-actor-movie">
          <h2>출연작</h2>
          <div className="detail-actor-movies">
            <Movie />
            <Movie />
            <Movie />
          </div>
        </div>
      </section>
    </div>
  );
}
