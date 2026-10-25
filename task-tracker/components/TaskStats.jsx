export default function TaskStats({ total, completed, pending }) {
  return (
    <section className="task-stats">
      <div className="stat-card">
        <h3>Total</h3>
        <p>{total}</p>
      </div>

      <div className="stat-card">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>

      <div className="stat-card">
        <h3>Pending</h3>
        <p>{pending}</p>
      </div>
    </section>
  );
}