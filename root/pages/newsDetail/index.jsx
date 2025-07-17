import 'react';

import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();

  return (
    <div className='container mx-auto'>
      <h1 className='pt-60 text-center text-3xl font-bold'>Yangilik #{id}</h1>
      <p className='mt-4 text-center text-gray-600'>To‘liq yangilik sahifasi bu yerda chiqadi.</p>
    </div>
  );
};

export default NewsDetail;
