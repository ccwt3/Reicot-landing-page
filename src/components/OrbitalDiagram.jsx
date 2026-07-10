import useInView from '../hooks/useInView.js';

export default function OrbitalDiagram() {
  const ref = useInView();
  return (
    <div className="orbital" ref={ref} aria-hidden="true">
      <span className="orbital__ring orbital__ring--outer" />
      <span className="orbital__ring orbital__ring--middle" />
      <span className="orbital__ring orbital__ring--inner" />
      <span className="orbital__core">Del problema al sistema operativo</span>
      <span className="orbital__dot orbital__dot--red" />
      <span className="orbital__dot orbital__dot--one" />
      <span className="orbital__dot orbital__dot--two" />
      <span className="orbital__dot orbital__dot--three" />
      <span className="orbital__line orbital__line--one" />
      <span className="orbital__line orbital__line--two" />
    </div>
  );
}
