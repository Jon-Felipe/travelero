import { Outlet } from 'react-router-dom';

type Props = {};

function ProfileLayout({}: Props) {
  return (
    <div>
      <h2>My account</h2>
      <section></section>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default ProfileLayout;
