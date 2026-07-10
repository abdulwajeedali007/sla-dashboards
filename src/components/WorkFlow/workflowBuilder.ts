import { initialNodes } from './nodes';

export function buildNodes(apiTasks: any[] = []) {
  const taskMap = new Map(apiTasks.map((task: any) => [task.StepNumber, task]));
  return initialNodes.map((node) => {
    const StepNumber = node.data?.StepNumber;
    if (!StepNumber) {
      return node;
    }
    const apiTask: any = taskMap.get(StepNumber);

    if (!apiTask) {
      return node;
    }

    return {
      ...node,

      data: {
        ...node.data,

        label: apiTask?.DepartmentName,
        text: apiTask.TaskName,
        pyGUID: apiTask.pyGUID,
        status: apiTask?.TaskStatus,
      },
    };
  });
}
