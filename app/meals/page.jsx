import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/mealsGrid';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'All meals',
  description: ' description of All meals',
};

async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href={`/meals/share`}>Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

export default MealsPage;
