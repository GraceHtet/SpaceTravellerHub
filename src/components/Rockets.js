import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectRockets, fetchRockets, getStatus } from '../redux/rockets/rocketsSlice';
import styles from '../styles/Rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(selectRockets);
  const status = useSelector(getStatus);

  useEffect(() => {
    if (status === false) dispatch(fetchRockets());
  }, [dispatch, status]);

  let content;
  if (status === true) {
    content = rockets.map((each) => (
      <article key={each.id} className={styles.article}>
        <img src={each.flickr_images} className={styles.img} alt="rocket" />
        <div>
          <h2 className={styles.title}>{each.name}</h2>
          <p>
            <span />
            {each.description}
          </p>
          <button type="button" className={styles.btn}>
            Reserve Rocket
          </button>
        </div>
      </article>
    ));
  }

  console.log(`${content}...leo`);
  return <>{content}</>;
};
export default Rockets;
