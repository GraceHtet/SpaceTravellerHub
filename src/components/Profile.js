import { useSelector } from 'react-redux';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);

  const reserveRockets = rockets.filter((rocket) => rocket.reserved && rocket);
  const joinedMissions = missions.filter((mission) => mission.joined);

  return (
    <div className={styles.container}>
      <div className={styles.mission}>
        <h2>My Missions</h2>
        <table className={styles.table}>
          <tbody className={styles.tbody}>
            {joinedMissions.map((mission) => (
              <tr key={mission.mission_id} className={styles.tr}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.rocket}>
        <h2>My Rockets</h2>
        <table className={styles.table}>
          <tbody className={styles.tbody}>
            {reserveRockets.map((rocket) => (
              <tr key={rocket.id} className={styles.tr}>
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Profile;
