import React, { useEffect, useRef, useState } from 'react';
import { handleCommand } from '@/utils/CommandHandler';
import { ChildComponentProps } from '@/Types/Interfaces';
import { AllFolders } from '@/Data/All-Data';
import { useStateManagement } from '@/hooks/StateContext';
import { Rnd } from 'react-rnd'; // Import Rnd
import TopControls from '../common/Navbar/TopControls';

type CMDProps = ChildComponentProps & {
  FolderContentAppaer?: boolean;
}

const CMD: React.FC<CMDProps> = ({ index, Title }) => {
  const { Open, Min, Max, makeFalse, makeTrue, IsFront, IsPhone, IsFrontError, makeErrorFalse, makeErrorTrue, MaxError, MinError, OpenError } = useStateManagement();

  // State variables
  const [width, setWidth] = useState(AllFolders[index!].Size.w);
  const [height, setHeight] = useState(AllFolders[index!].Size.h);
  const [position, setPosition] = useState({
    x: IsPhone ? 0 : AllFolders[index!].Position.x,
    y: IsPhone ? 0 : AllFolders[index!].Position.y
  });
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<{ command: string, result: string }[]>([]);
  const [counter, setcount] = useState(output.length);
  const [availableCommands] = useState([
    "--help",
    "help",
    "ls",
    "about",
    "git checkout github",
    "docs",
    "cv",
    "work",
    "projects",
    "education",
    "achievements",
    "skills",
    "connect",
    "exit",
    "clear",
  ]);

  // Handle Tab Completion
  const handleEventCOmpitaion = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault(); // Prevent the default tab behavior
      if (command.trim()) {
        const matches = availableCommands.filter((cmd) =>
          cmd.startsWith(command.trim().toLowerCase())
        );
        if (matches.length === 1) {
          setCommand(matches[0]); // Autocomplete if only one match
        } else if (matches.length > 1) {
          // Show possible completions in output
          setCommand(matches[0]);
          handleCommandSubmit;
        }
      }
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault(); // Prevent default scrolling behavior
      console.log(counter === output.length)
      if (counter > 0) {
        // Navigate to previous command
        setCommand(output[counter - 1]?.command || '');
        setcount((prevCounter) => prevCounter - 1);
        console.log(counter)
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault(); // Prevent default scrolling behavior
      if (counter < output.length - 1) {
        // Navigate to next command
        setcount((prevCounter) => prevCounter + 1);
        setCommand(output[counter + 1]?.command || '');
      } else if (counter === output.length - 1) {
        // Clear input after the last command
        setcount(output.length);
        setCommand('');
      }
      console.log(counter)
    }
  };

  // References for window dimensions
  const maxWidth = useRef(window.innerWidth);
  const maxHeight = useRef(window.innerHeight);
  const [store, setStore] = useState({ width, height, position });

  const inputRef = useRef<HTMLInputElement>(null);

  // Update window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      maxWidth.current = window.innerWidth;
      maxHeight.current = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle maximize and restore window sizes
  const handleMax = () => {
    if (!Max[index!]) {
      setStore({ width, height, position });
      setWidth(maxWidth.current);
      setHeight(maxHeight.current - 28);
      setPosition({ x: 0, y: 0 });
      makeTrue(index!, 'max');
    } else {
      makeFalse(index!, 'max');
      setWidth(store.width); // Restore previous width
      setHeight(store.height); // Restore previous height
      setPosition(store.position); // Restore previous position
    }
  };

  // Handle command submission
  const handleCommandSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (command.trim()) {
      handleCommand(command.trim().toLowerCase(), setOutput, { Open, Min, Max, makeFalse, makeTrue, IsFront, IsPhone, IsFrontError, makeErrorFalse, makeErrorTrue, MaxError, MinError, OpenError });
      if (command.trim() === 'exit') {
        setTimeout(() => {
          makeFalse(index!, 'open');
        }, 1500);
      }
      setCommand('');
      setcount(output.length + 1);
    }
  };

  // Helper function to render colored text
  const renderOutput = (text: string) => {
    return text
      .replace(/\x1b\[32m/g, '<span style="color: #97F4D2;">')
      .replace(/\x1b\[31m/g, '<span style="color: #DD4531;">')
      .replace(/\x1b\[34m/g, '<span style="color: #FF00FF;">')
      .replace(/\x1b\[0m/g, '</span>')
      .split('\n')
      .map((line, index) => <div key={index} dangerouslySetInnerHTML={{ __html: line }} />);
  };

  const handleClick = () => {
    makeTrue(index!, 'open');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div onClick={handleClick}>
      <Rnd
        size={{ width, height }}
        position={position}
        dragHandleClassName={ "handle"}
        minWidth={IsPhone ? maxWidth.current : 270}
        minHeight={IsPhone ? maxHeight.current : 100}
        maxWidth={maxWidth.current}
        maxHeight={maxHeight.current}
        bounds="body"
        enableResizing={!Max[index!]}
        resizeHandleClasses={{
          top: Max[index!] ? 'hidden' : '',
          right: Max[index!] ? 'hidden' : '',
          bottom: Max[index!] ? 'hidden' : '',
          left: Max[index!] ? 'hidden' : '',
          topRight: Max[index!] ? 'hidden' : '',
          bottomRight: Max[index!] ? 'hidden' : '',
          bottomLeft: Max[index!] ? 'hidden' : '',
          topLeft: Max[index!] ? 'hidden' : ''
        }}
        onDragStop={Max[index!] ? () => { } : (e, d) => setPosition({ x: d.x, y: d.y })}
        onResizeStop={Max[index!] ? () => { } : (e, direction, ref, delta, position) => {
          setWidth(parseInt(ref.style.width));
          setHeight(parseInt(ref.style.height));
          setPosition(position);
        }}
        className={`border-2 border-[#225AD8] rounded-t-sm resizeable-box overflow-hidden select-none bg-white ${Min[index!] ? 'hidden' : ''}`}
        style={{ zIndex: IsFront === index ? 10 : 1 }}
      >
        <TopControls
          index={index}
          Title={Title}
          Max={Max}
          Min={Min}
          Open={Open}
          makeFalse={makeFalse}
          icon={AllFolders[index!]?.IconClose}
          makeTrue={makeTrue}
          handleMax={handleMax}
        />
        <div className='flex h-full justify-center w-full' >
          <div className='bg-white overflow-y-auto w-full' style={{ height: `calc(100% - 40px)` }}>
            <div className='pb-10 pl-5 p-2 bg-[#000000] shadow-lg font-mono h-full max-w-full overflow-y-auto'>
              <div className="text-[#56B3B4] mb-2 " >Welcome to the terminal!</div>
              <div className="space-y-2 text-[#00F000]">
                {output.map((elem, index) => (
                  <div key={index}>
                    <div><span className='text-[#00BFFF]'>@ikshit04 </span>{`> ${elem.command}`}</div>
                    <div className='whitespace-pre-wrap pl-5'>{renderOutput(elem.result)}</div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleCommandSubmit} className="mt-2 flex">
                <span className="flex text-green-400 gap-1"><span className='text-[#00BFFF]'>@ikshit04 </span> {'>'}</span>
                <input
                  type="text"
                  value={command}
                  onKeyDown={handleEventCOmpitaion}
                  onChange={(e) => setCommand(e.target.value)}
                  className="bg-transparent border-none outline-none ml-2 w-full text-white/70"
                  placeholder='--help'
                  ref={inputRef}
                  autoFocus
                />
              </form>
            </div>
          </div>
        </div>
      </Rnd>
    </div>
  );
};

export default CMD;
