import { useState } from 'react';
import { LayoutList, Workflow } from 'lucide-react';
import { useParams, Link } from "react-router";
import WorkFlow from '../../components/WorkFlow/Index';
import TaskWiseDetails from '../../components/TaskWiseDetails/Index';

function Index() {
  const [showTab, setShowTab] = useState('td');

  function handleShowTab(value: string) {
    setShowTab(value);
  }
const {id} = useParams();
  return (
    <div className="my-9">
      <div className="flex mb-6 bg-white lg:w-120   p-1 rounded-[16px]">
        <div
          className={`py-4 flex justify-center items-center text-center font-bold rounded-[12px] mr-1 flex-1 hover:cursor-pointer ${showTab === 'td' ? 'bg-(--gold-accent) text-white' : 'bg-transparent text-gray-600'}`}
          onClick={() => handleShowTab('td')}
        >
          <LayoutList className="mr-2" />
          Task Details
        </div>
        <div
          className={`py-4 flex justify-center font-bold items-center text-center rounded-[12px] flex-1 hover:cursor-pointer ${showTab === 'cr' ? 'bg-(--gold-accent) text-white' : 'bg-transparent text-gray-600'}`}
          onClick={() => handleShowTab('cr')}
        >
          <Workflow className="mr-2" />
          Control Room
        </div>
      </div>
      {showTab === 'td' ? (
        <>
          <TaskWiseDetails />
        </>
      ) : (
        <>
          <WorkFlow />
        </>
      )}
     <p>   
      <Link className="p-2 mr-1 text-blue-500 underline" to={`/department-wise-sla/${id}`}>Clikc here</Link>
      to know more about the department-wise SLA Report
      </p> 
    </div>
  );
}

export default Index;
