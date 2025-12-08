import React from 'react'
const Footer = ({completedTasksCount=0, activeTasksCount=0}) => {
  return (
    <>
    {completedTasksCount + activeTasksCount > 0 && (
      <div className='text-center'>
        <p className='text-sm text-muted-foreground'>
      {completedTasksCount>0&&(
      <>
      🎉🥳🎊🎁 Fantastic! You have completed {completedTasksCount} task{activeTasksCount>0 &&
       `, and  ${activeTasksCount} uncomplete task. Work hard 💪`}
      </>

      )}
      {completedTasksCount===0&& activeTasksCount>0&&(
        <>🔔 Let start doing {activeTasksCount}. Keep going! 🚀</>
      )}
        </p>
      </div>
    )}
    </>
  );
};

export default Footer;