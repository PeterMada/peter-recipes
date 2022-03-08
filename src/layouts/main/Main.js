import { Card } from '../../components/card/Card';
import { Header } from '../header/Header';
import { RecipeSmall } from '../../components/recipe/RecipeSmall';
import './styles.scss';

export const Main = () => {
  return (
    <>
      <Header />
      <Card />
      <div className='recipes-list'>
        <RecipeSmall />
        <RecipeSmall />
        <RecipeSmall />
      </div>
    </>
  );
};
