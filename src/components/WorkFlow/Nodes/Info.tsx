import { Mail, PersonStanding, Settings } from 'lucide-react';

function Info() {
  return (
    <div className="bg-amber-100 border rounded-[20px] p-8 w-xl">
      <div className="flex gap-16 mb-5 items-center">
        <p className="w-10 h-10 rounded-[20px] bg-blue-200"></p>
        <p className="text-left">Pega System</p>
      </div>
      <div className="flex gap-16 mb-5 items-center">
        <p className="w-10 h-10 rounded-[20px] bg-green-200"></p>
        <p>External System</p>
      </div>
      <div className="flex gap-16 mb-5 items-center">
        <div className="text-blue-600">
          <Settings />
        </div>
        <p>
          Auto-Completion of tracker taskthrough integration with DAMACSystems
        </p>
      </div>
      <div className="flex gap-16 mb-5 items-center">
        <div className="text-blue-600">
          <Mail />
        </div>
        <p>Tracker task approval via email</p>
      </div>
      <div className="flex gap-16 mb-5 items-center">
        <div className="text-yellow-600">
          <Mail />
        </div>
        <p>Tracker task confirmation via Email</p>
      </div>
      <div className="flex gap-16 mb-5 items-center">
        <p className="w-28">1 - 39</p>
        <p className="">
          These are numbers assigned forSteps in Pega tracker. They arejust
          indicative. Parallel andsequential are denoted as perworkflow.
        </p>
      </div>
      <div className="flex gap-16 mb-5 items-center">
        <PersonStanding />
        <p>Tracker task completion viaManual Action</p>
      </div>
      <div className="flex gap-16 mb-5 items-center">
        <p className="w-10 h-10 bg-orange-200 rounded-full"></p>
        <p>Tracker Milestone</p>
      </div>
      <div className="flex gap-16 items-center">
        <p className="w-10 h-10 rounded-full bg-orange-300"></p>
        <p>Launch Readiness</p>
      </div>
    </div>
  );
}

export default Info;
