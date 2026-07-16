import { Mail, PersonStanding, Settings, UserRound } from 'lucide-react';

function Info() {
  return (
    <div className="rounded-[20px] p-8 w-lg bg-lime-50 ">
      <div className="flex gap-4 mb-5 items-center">
        <p className="w-10 h-10 rounded-[20px] bg-blue-200"></p>
        <p className="text-left">Pega System</p>
      </div>
      <div className="flex gap-4 mb-5 items-center">
        <p className="w-10 h-10 rounded-[20px] bg-green-200"></p>
        <p>External System</p>
      </div>
      <div className="flex gap-8 mb-5 items-center">
        <div className="text-blue-600">
          <Settings />
        </div>
        <p>
          Auto-Completion of tracker taskthrough integration with DAMACSystems
        </p>
      </div>
      <div className="flex gap-8 mb-5 items-center">
        <div className="text-blue-600">
          <Mail />
        </div>
        <p>Tracker task approval via email</p>
      </div>
      <div className="flex gap-8 mb-5 items-center">
        <div className="text-yellow-600">
          <Mail />
        </div>
        <p>Tracker task confirmation via Email</p>
      </div>
      {/* <div className="flex gap-16 mb-5 items-center">
        <p className="w-3">1 - 39</p>
        <p className="">
          These are numbers assigned forSteps in Pega tracker. They arejust
          indicative. Parallel andsequential are denoted as perworkflow.
        </p>
      </div> */}
      <div className="flex gap-8 mb-5 items-center">
        <PersonStanding />
        <p>Tracker task completion viaManual Action</p>
      </div>
      <div className="flex gap-8 mb-5 items-center">
        <p className="w-10 h-10 bg-orange-200 rounded-full"></p>
        <p>Tracker Milestone</p>
      </div>
      <div className="flex gap-8 items-center">
        <p className="w-10 h-10 rounded-full bg-orange-300"></p>
        <p>Launch Readiness</p>
      </div>
    </div>

    // <div className="rounded-[20px] px-4 py-2">
    //   <h3 className="mb-5 mt-2 font-bold uppercase mx-2">Legend</h3>
    //   <div className="flex gap-4 mb-5 items-center">
    //     <p className="w-5 h-5 rounded bg-green-500 border-2 border-green-700"></p>
    //     <p className="text-sm">Completed</p>
    //   </div>
    //   <div className="flex gap-4 mb-5 items-center">
    //     <p className="w-5 h-5 rounded bg-yellow-500 border-2 border-yellow-700"></p>
    //     <p className="text-sm">In Progress</p>
    //   </div>
    //   <div className="flex gap-4 mb-5 items-center">
    //     <p className="w-5 h-5 rounded bg-gray-500 border-2 border-gray-700"></p>
    //     <p>New</p>
    //   </div>
    //   <div className="flex gap-4 mb-5 items-center">
    //     <p className="w-5 h-5 rounded bg-red-500 border-2 border-red-700"></p>
    //     <p>Skipped</p>
    //   </div>
    //   <div className="flex gap-4 mb-5 items-center">
    //     <p className="w-5 h-5 rounded bg-green-200 border-2 border-green-600"></p>
    //     <p>External System</p>
    //   </div>
    //   <div className="flex gap-4 mb-5 items-center">
    //     <UserRound size={35} />
    //     <p className="text-sm">Dependency Step</p>
    //   </div>
    //   <div className="flex gap-4 mb-5 items-center">
    //     <p className="w-5 h-5 bg-orange-200 rounded-full border-2 border-orange-500"></p>
    //     <p className="text-sm">Milestone</p>
    //   </div>
    //   <div className="flex gap-4 items-center">
    //     <p className="w-6 h-5 rounded-full border-2 bg-orange-500 border-orange-700"></p>
    //     <p className="text-sm">Launch Milestone</p>
    //   </div>
    // </div>
  );
}

export default Info;
