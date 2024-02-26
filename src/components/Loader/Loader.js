import { DotLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div>
      <DotLoader
        color={'#36d7b7'}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
