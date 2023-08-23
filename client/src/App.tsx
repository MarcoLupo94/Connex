import { useEffect, useRef, useState } from 'react';
import { calculateTimeDifference, loadMetrics, loadTime } from './utils/loader';
import { getMetrics, getTime } from './utils/apiService';
import MetricsComponent from './components/MetricsComponent';
import TimeComponent from './components/TimeComponent';
import SpinnerComponent from './components/SpinnerComponent';

function App() {
  const time = useRef<number | string>(0);
  const [metrics, setMetrics] = useState('');
  const [timeDifference, setTimeDifference] = useState('');
  // Spinners
  const [loadingMetrics, setLoadingMetrics] = useState(false);
  const [loadingTime, setLoadingTime] = useState(false);

  const loadData = () => {
    // Show spinners
    setLoadingMetrics(true);
    setLoadingTime(true);

    loadMetrics(getMetrics, setMetrics, setLoadingMetrics);
    loadTime(getTime, time);
  };

  useEffect(() => {
    loadData();
    const data = setInterval(loadData, 30000);
    const calculate = setInterval(
      () =>
        calculateTimeDifference(
          time.current,
          setTimeDifference,
          setLoadingTime
        ),
      1000
    );
    return () => {
      clearInterval(data);
      clearInterval(calculate);
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        padding: '3em',
        gap: '2em'
      }}
    >
      {loadingTime ? (
        <SpinnerComponent />
      ) : (
        <TimeComponent time={time.current} timeDifference={timeDifference} />
      )}
      {loadingMetrics ? (
        <SpinnerComponent />
      ) : (
        <MetricsComponent metrics={metrics} />
      )}
    </div>
  );
}

export default App;
