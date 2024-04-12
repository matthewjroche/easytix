import { BackgroundHero } from "../components/BackgroundHero";
import { TicketCard } from "../components/TicketCard";
import { UserCard } from "../components/UserCard";
import { EventCard } from "../components/EventCard";
import { UserEventCard } from "../components/UserEventCard";
import { EventSearchList } from "../components/EventSearchList";

export default function Search() {
  return (
    <main>
      <div>
        <div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                //   "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
                "url(https://luxurylondon.co.uk/wp-content/uploads/2022/04/boardmasters-uk-festivals-c-shutterstock-Jordan-Crosby.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex-col hero-content text-center text-neutral-content">
              

              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
              <p>Genre Search</p>   

              <div className="flex flex-row space-x-2">
                
                <button className="btn">Rock</button>
                <button className="btn">Pop</button>
                <button className="btn">Metal</button>
                <button className="btn">Electronic</button>
                <button className="btn">House</button>
                <button className="btn">Drum & Bass</button>
                <button className="btn">Garage</button>


              </div>



              <div>

            <EventSearchList></EventSearchList>



              </div>

              <div className="join">
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
</div>

              <div className="max-w-md">
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
