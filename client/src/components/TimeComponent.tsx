interface TimeComponentProps {
  time: number | string;
  timeDifference: string;
}

const TimeComponent = (props: TimeComponentProps) => {
  return (
    <section>
      <div
        style={{
          border: 'solid 1px #dddddd',
          padding: '2em',
          boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)'
        }}
      >
        <h2>Time</h2>
        <p>
          Server Time: <b>{props.time}</b>
        </p>
        <p>
          Local machine difference: <b>{props.timeDifference}</b>
        </p>
      </div>
    </section>
  );
};

export default TimeComponent;
