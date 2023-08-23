interface MetricsComponentProps {
  metrics: string;
}

const MetricsComponent = (props: MetricsComponentProps) => {
  return (
    <section
      className="metrics"
      style={{
        border: 'solid 1px #dddddd',
        padding: '2em',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)'
      }}
    >
      <h2>Metrics</h2>
      {props.metrics ? <pre>{props.metrics}</pre> : <p>Loading...</p>}{' '}
    </section>
  );
};

export default MetricsComponent;
