import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  
  return (
    <div>
      <h1>Dynamic Page ID: {params.id}</h1>
    </div>
  );
};

export default Page;
