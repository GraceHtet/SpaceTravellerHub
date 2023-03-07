import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectRockets,
  fetchRockets,
  getStatus,
  reserveRocket,
} from '../redux/rockets/rocketsSlice';
import styles from '../styles/Rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(selectRockets);
  const status = useSelector(getStatus);

  useEffect(() => {
    if (status === false) dispatch(fetchRockets());
  }, [dispatch, status]);

  let rocketList;
  if (status === true) {
    rocketList = rockets.map((each) => (
      <article key={each.id} className={styles.article}>
        <img src={each.flickr_images} className={styles.img} alt="rocket" />
        <div>
          <h2 className={styles.title}>{each.name}</h2>
          <p>
            {each.reserved ? <span className={styles.span}>Reserved</span> : ''}
            {each.description}
          </p>
          <button
            type="button"
            className={each.reserved ? styles.unreserve : styles.reserve}
            onClick={() => dispatch(reserveRocket(each.id))}
          >
            {each.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </article>
    ));
  }
  return <>{rocketList}</>;
};
export default Rockets;
