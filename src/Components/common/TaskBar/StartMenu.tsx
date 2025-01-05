import StartButton from './StartButton';
import StartMenuRight from './TaskBarRHS';
import AllOpenTabs from './AllOpenTabs';

const StartMenu = ({ Open, Max, Min, makeTrue, makeFalse, IsPhone }: any) => {
  return (
    <div className='fixed bottom-0 w-full bg-[#245DDB] z-50'>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center'>
          <div className='min-w-[100px]'>
            <StartButton
              Open={Open}
              Max={Max}
              Min={Min}
              makeTrue={makeTrue}
              makeFalse={makeFalse}
            />
          </div>
          <div className='flex-grow overflow-hidden no-scrollbar'>
            <AllOpenTabs
              Open={Open}
              Max={Max}
              Min={Min}
              makeTrue={makeTrue}
              makeFalse={makeFalse}
            />
          </div>
          {!IsPhone && <StartMenuRight IsPhone={IsPhone} />}
        </div>
      </div>
    </div>
  );
};

export default StartMenu;

