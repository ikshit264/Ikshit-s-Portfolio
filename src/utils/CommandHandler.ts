import { useStateManagement } from "@/hooks/StateContext";

export interface CommandOutput {
  command: string;
  result: string;
}

// Calculate Levenshtein distance between two strings
const getLevenshteinDistance = (str1: string, str2: string): number => {
  const matrix: number[][] = [];

  // Initialize matrix
  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= str2.length; j++) {
    matrix[0][j] = j;
  }

  // Fill matrix
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[str1.length][str2.length];
};

// Find the most similar command
const findSimilarCommand = (input: string, validCommands: string[]): string | null => {
  const threshold = 3; // Maximum edit distance to consider as similar
  let bestMatch: string | null = null;
  let minDistance = Infinity;

  for (const command of validCommands) {
    const distance = getLevenshteinDistance(input.toLowerCase(), command.toLowerCase());
    if (distance < minDistance && distance <= threshold) {
      minDistance = distance;
      bestMatch = command;
    }
  }

  return bestMatch;
};

export const handleCommand = (
  command: string,
  setOutput: React.Dispatch<React.SetStateAction<CommandOutput[]>>,
  stateManagement: ReturnType<typeof useStateManagement>
) => {
  const { makeFalse, makeTrue} = stateManagement;

  // List of valid commands
  const validCommands = [
    "--help",
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
    "clear"
  ];

  const handleHelp = () => {
    setOutput((prevOutput) => [
      ...prevOutput,
      {
        command,
        result:
          "Hey there! Here are some commands you can use:\n\t--help, about, git checkout github, docs, cv, work, projects, education, achievements, skills, connect, exit, clear",
      },
    ]);
  };

  const showAbout = () => {
    setOutput((prevOutput) => [
      ...prevOutput,
      {
        command,
        result: `Hey! I'm really into web development and love a good coding challenge. When I'm not coding, I'm probably on the badminton court. Feel free to hit me up on Instagram \x1b[34m@ikshit_04\x1b[0m if you want to chat or just connect!`,
      },
    ]);
  };

  const handleDocs = () => {
    setOutput((prevOutput) => [
      ...prevOutput,
      {
        command,
        result: "\x1b[32mSure here is Docs..\x1b[0m",
      },
    ]);
    setTimeout(() => {
      makeFalse(3, 'min');
      makeTrue(3, 'open');
    }, 800);
  };

  const downloadResume = () => {
    const resumePath = "/Resume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "ikshit_resume.pdf";
    link.click();

    setOutput((prevOutput) => [
      ...prevOutput,
      { command, result: "\x1b[32mDownloading Resume...\x1b[0m" },
    ]);
  };

  const showWork = () => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { command, result: "\x1b[32mHere's a quick rundown of my work experience...\x1b[0m" },
    ]);
    setTimeout(() => {
      makeFalse(5, 'min');
      makeTrue(5, 'open');
    }, 800);
  };

  const showProject = () => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { command, result: "\x1b[32mCheck out my awesome projects here...\x1b[0m" },
    ]);
    setTimeout(() => {
      makeFalse(6, 'min');
      makeTrue(6, 'open');
    }, 800);
  };

  const showEducation = () => {
    setOutput((prevOutput) => [
      ...prevOutput,
      {
        command,
        result: "Education:\n\t1. \x1b[34mShri Ramdeobaba College of Engineering and Management\x1b[0m - Still studying!\n\t2. \x1b[34mSMSJ JR. College\x1b[0m - Finished in 2022\n\t3. \x1b[34mDilasagram Convent High School\x1b[0m - Wrapped up in 2020",
      },
    ]);
  };

  const showAchievements = () => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { command, result: "Achievements:\n\t1. \x1b[32mDistrict-level badminton player 🏸\x1b[0m\n\t2. \x1b[32mScored in the 95%ile in JEE 🚀\x1b[0m\n\t3. \x1b[32mAlways up for a coding challenge and passionate about tech!🤖\x1b[0m" }
    ]);
  };

  const showSkills = () => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { command, result: "\x1b[32mHere's a peek at my skills...\x1b[0m" },
    ]);
    setTimeout(() => {
      makeFalse(2, 'min');
      makeTrue(2, 'open');
    }, 800);
  };

  const showConnect = () => {
    setOutput((prevOutput) => [
      ...prevOutput,
      {
        command,
        result: "Want to connect? Drop me an email at \x1b[34mikshit.talera@gmail.com\x1b[0m",
      },
    ]);
    setTimeout(() => {
      makeFalse(0, 'min');
      makeTrue(0, 'open');
    }, 800);
  };

  // Handle the command execution
  const executeCommand = () => {
    switch (command) {
      case "man":
        break;
      case "--help":
      case "help":
      case "ls":
        handleHelp();
        break;
      case "about":
        showAbout();
        break;
      case "git checkout github":
        window.open("https://github.com/ikshit264", "_blank");
        setOutput((prevOutput) => [
          ...prevOutput,
          { command, result: "Opened GitHub - \x1b[34mikshit264\x1b[0m" },
        ]);
        break;
      case "docs":
        handleDocs();
        break;
      case "cv":
        downloadResume();
        break;
      case "work":
        showWork();
        break;
      case "projects":
        showProject();
        break;
      case "education":
        showEducation();
        break;
      case "achievements":
        showAchievements();
        break;
      case "skills":
        showSkills();
        break;
      case "connect":
        showConnect();
        break;
      case "exit":
        setOutput((prevOutput) => [
          ...prevOutput,
          { command, result: "\x1b[32mThanks for stopping by! See you around \x1b[31m:)\x1b[0m" },
        ]);
        break;
      case "clear":
        setOutput([]);
        break;
      default:
        // Check for similar commands
        const similarCommand = findSimilarCommand(command, validCommands);
        if (similarCommand) {
          setOutput((prevOutput) => [
            ...prevOutput,
            { 
              command, 
              result: `Command not found. Did you mean \x1b[32m${similarCommand}\x1b[0m? Try running that instead!` 
            },
          ]);
        } else {
          setOutput((prevOutput) => [
            ...prevOutput,
            { 
              command, 
              result: `Oops, I don't recognize the command: \x1b[31m${command}\x1b[0m` 
            },
          ]);
        }
        break;
    }
  };

  // Execute the command
  executeCommand();
};