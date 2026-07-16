import { initialNodes } from './nodeDefinitions';
import { nodePositions } from './nodePosition';
import { nodeConfig } from './layoutConfig';

export function buildNodes(apiTasks: any[] = []) {
  const taskMap = new Map(apiTasks.map((task) => [task.StepNumber, task]));

  return initialNodes.map((node: any) => {
    const apiTask = taskMap.get(node.data?.StepNumber);
    const coordinate = nodePositions[node.id];

    return {
      ...node,

      position: coordinate
        ? {
            x:
              nodeConfig.position.startX +
              coordinate.col * nodeConfig.position.columnGap,

            y:
              nodeConfig.position.startY +
              coordinate.row * nodeConfig.position.rowGap,
          }
        : { x: 0, y: 0 },

      // ...nodeConfig.defaultNode,

      data: apiTask
        ? {
            ...node.data,
            label: apiTask.DepartmentName,
            text: apiTask.TaskName,
            pyGUID: apiTask.pyGUID,
            status: apiTask.TaskStatus,
            
          }
        : node.data,
    };
  });
}
