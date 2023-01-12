import classes from './MealsSummary.module.css';

function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delcious food delivered to you!</h2>
      <p>
        Choose your favorite meal from our wide selection of available meals and
        enjoy delicious lunch and dinner soon
      </p>
      <p>
        All meals are cooked with high-quality ingredients, just-in-time, and of
        course, by experienced chefs!
      </p>
    </section>
  );
}

export default MealsSummary;
