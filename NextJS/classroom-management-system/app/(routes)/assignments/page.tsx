import Button from '@/app/(components)/button';
import {assignments} from '../../(config)/assignments';
import AssignmentCard from './(components)/assignment-card';

export default function AssignmentsPage() {
  return (
    <>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {assignments.map((assignment) => (
        <div className = "m-5" key={assignment.id}>
          <AssignmentCard 
            assignmentId={assignment.id}
            name={assignment.name}
            description={assignment.description}
            instructions={assignment.instructions}
          />
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-8">
      <Button title="Submit Assignment" href="/assignments/submit" />
    </div>
    </>
  );
}