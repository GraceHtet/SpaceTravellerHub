import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import styles from '../styles/Missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);

  return (
    <div>
      <h1 className={styles.title}>Missions</h1>
    </div>
  );
};
export default Missions;
