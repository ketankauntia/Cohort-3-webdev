import { useState, useEffect } from 'react';
import style from './Timer.module.css';
const Timer = () => {
  const [time, setTime] = useState(0); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [editState, setEditState] = useState({ field: null, value: '' }); // Track which part of time is being edited
  const [inputValue, setInputValue] = useState(''); // Value for the input field

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  function startPauseTimer() {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  }

  const formatTime = (timeInSeconds) => {
    //calculating h,m,s
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const { hours, minutes, seconds } = formatTime(time);

  const handleEditField = (field) => {
    if (editState.field === field) {
      // → Saving the Value

      // if (editState.field === field)
      // What does this condition check?

      // It checks if the user clicks the same field that is already being edited.
      // If true, this means the user finished editing and we should save the new value.

      //getting the time from the display
      const newTime = { ...formatTime(time), [field]: editState.value.padStart(2, '0') };

      const calculatedTime =
        parseInt(newTime.hours) * 3600 + parseInt(newTime.minutes) * 60 + parseInt(newTime.seconds);

      setTime(isNaN(calculatedTime) ? 0 : calculatedTime); // Ensure it's not NaN

      setEditState({ field: null, value: '' }); //reseting the state variable
    } else {
      //else → Entering Edit Mode

      //pausing timer
      // startPauseTimer();

      // when edit is entered, if it is running, then we pause it.
      if (isRunning) {
        setIsRunning(false);
      }

      //getting the field which is being edited (h/m/s) and getting its corresposnding value from object.. and then updating state
      setEditState({ field, value: formatTime(time)[field] }); // arr[i]
    }
  };

  //Now that we can enter edit mode when clicking on a time field, we need a function to update the value as the user types.
  const handleInputChange = (value) => {
    // Allow only numbers and max 2 digits
    if (/^\d{0,2}$/.test(value)) {
      // Prevents minutes/seconds from exceeding 59
      // If the user tries entering 75 in minutes/seconds, it won’t allow it.
      if (editState.field !== 'hours' && parseInt(value) > 59) {
        return;
      }
      setEditState((prevState) => ({ ...prevState, value })); // Update only the value
    }
  };

  const handleReset = () => {
    setIsRunning(false); // Stop the timer if running
    setTime(0); // Reset time to 0
    setEditState({ field: null, value: '' }); // Reset edit state
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--progress', `${(time % 60) * (100 / 60)}%`);
  }, [time]);

  return (
    <div className={style.timerApp}>
      <div className={style.timerDisplay}>
        <div className={style.timerCircle}>
          <div className={style.timerTime}>
            {/* <span>{hours}:</span>
            <span>{minutes}:</span>
            <span>{seconds}</span> */}
            {/* redering hours */}
            {editState.field === 'hours' ? (
              <input
                type='text'
                value={editState.value}
                onChange={(e) => handleInputChange(e.target.value)}
                onBlur={() => handleEditField('hours')}
                className={style.timeInput}
                onFocus={(e) => e.target.select()} // Auto-select  preexisting input text when clicked for edit
                autoFocus
              />
            ) : (
              <span onClick={() => handleEditField('hours')}>{hours}:</span>
            )}
            {/* redering minutes */}
            {editState.field === 'minutes' ? (
              <input
                type='text'
                value={editState.value}
                onChange={(e) => handleInputChange(e.target.value)}
                onBlur={() => handleEditField('minutes')}
                className={style.timeInput}
                onFocus={(e) => e.target.select()} // Auto-select  preexisting input text when clicked for edit
                autoFocus
              />
            ) : (
              <span onClick={() => handleEditField('minutes')}>{minutes}:</span>
            )}
            {/* redering seconds */}
            {editState.field === 'seconds' ? (
              <input
                type='text'
                value={editState.value}
                onChange={(e) => handleInputChange(e.target.value)}
                onBlur={() => handleEditField('seconds')}
                className={style.timeInput}
                onFocus={(e) => e.target.select()} // Auto-select  preexisting input text when clicked for edit
                autoFocus
              />
            ) : (
              <span onClick={() => handleEditField('seconds')}>{seconds}</span>
            )}
          </div>
        </div>
      </div>
      <div className={style.actionButtons}>
        <button className={style.actionButton} onClick={startPauseTimer}>
          {isRunning ? 'Pause' : 'Start'}
        </button>

        <button className={style.actionButton} onClick={handleReset} disabled={time === 0}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
