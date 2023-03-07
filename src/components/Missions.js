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

      {missions.length === 0 && (
        <p className={styles.loading}>Loading missions...</p>
      )}

      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Mission</th>
            <th className={styles.th}>Description</th>
            <th className={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr className={styles.tr} key={mission.mission_id}>
              <td className={styles.td}>{mission.mission_name}</td>
              <td className={styles.td}>{mission.description}</td>
              <td className={styles.td}>Not booked</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
