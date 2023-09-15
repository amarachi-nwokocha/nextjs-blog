import styles from "../styles/Home.module.css";

export default function MovieSec() {
  // const [movies, setMovies] = useState([]);
  // const getMovie=async ()=>{
  //     const response=await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=<KEY>")
  //     const data= await  response.json();
  //     setMovies(data)
  //     }
  //     useEffect(() => {
  //         getMovie()}, []);
  return (
    <div className={styles.movieSec}>
      <h1>Movie Section</h1>
      <br />
      <div className={styles.movieCont}>
        <div className={styles.card}>
          <div className={styles.title}>
            <h2>ok lets see</h2>
            <p>welcome but in</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <h2>ok lets see</h2>
            <p>welcome but in</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <h2>ok lets see</h2>
            <p>welcome but in</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <h2>ok lets see</h2>
            <p>welcome but in</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <h2>ok lets see</h2>
            <p>welcome but in</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <h2>ok lets see</h2>
            <p>welcome but in</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <h2>ok lets see</h2>
            <p>welcome but in</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <h2>ok lets see</h2>
            <p>welcome but in</p>
          </div>
        </div>
      </div>
    </div>
  );
}
