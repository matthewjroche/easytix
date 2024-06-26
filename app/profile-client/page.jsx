"use client";
import { UserCard } from "../components/UserCard";
import { useUser } from "@auth0/nextjs-auth0/client";
import { UserEventCard } from "../components/UserEventCard";
import { UserEventList } from "../components/UserEventList";
import { BackgroundHero } from "../components/BackgroundHero";
import { QRModal } from "../components/QRModal";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div flex>
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
            <UserCard user={user}></UserCard>

            {/* <button className="btn">Create an event</button> */}
            <a href="/events/create">
              <button className="btn btn-active btn-primary">
                Create an event
              </button>
            </a>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
            {/* <UserEventList/> */}
            <UserEventCard></UserEventCard>

            <UserEventCard></UserEventCard>

            <UserEventCard></UserEventCard>
            <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
            <QRModal></QRModal>

          </div>
        </div>
      </div>
    )
  );
}

// person={{name:user.name, img:user.picture}}

{
  /* <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p> */
}
