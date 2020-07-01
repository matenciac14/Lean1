import React from 'react';

import Stage from './Stage';

const Board = ({ stagesNames, stagesTasks,setTaskName }) => {
  return (
    <div>
      <h1>Kanban board</h1>
      <div style={{
        display: 'flex',
      }}>
        {stagesTasks.map((tasks, idx) => (
          <Stage
            stageId={idx}
            key={stagesNames[idx]}
            name={stagesNames[idx]}
            tasks={tasks}
            setTaskName={setTaskName}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
