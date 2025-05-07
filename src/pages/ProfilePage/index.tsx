import { useProfileStore } from "./useProfileStore";

const ProfilePage = () => {
    const city = useProfileStore((state) => state.user.address.city);
  const updateCity = useProfileStore((state) => state.updateCity);
  const updateLocation = useProfileStore((state) => state.updateLocation);
  console.log(useProfileStore((state) => state.user));
  return (
    <div>
      <p>City: {city}</p>
      <br />
      <p>Location: {useProfileStore((state) => state.user.address.location.lat)}, {useProfileStore((state) => state.user.address.location.lng)}</p>
      <button onClick={() => updateCity('Hồ Chí Minh')}>Chuyển thành phố</button> <br />
      <button onClick={() => updateCity('Hà Nội')}>reset thành phố</button> <br></br>
      <button onClick={() => updateLocation(10.8231, 106.6297)}>Chuyển tọa độ</button>

      <br></br>
      <button onClick={() => updateLocation(21.03, 105.85)}>reset tọa độ</button>
    </div>
  );
};

export default ProfilePage;