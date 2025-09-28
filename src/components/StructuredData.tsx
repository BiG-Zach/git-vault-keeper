import React from 'react';

interface StructuredDataProps {
  data: Array<{
    type: string;
    innerHTML: string;
  }>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <>
      {data.map((item, index) => (
        <script
          key={index}
          type={item.type}
          dangerouslySetInnerHTML={{ __html: item.innerHTML }}
        />
      ))}
    </>
  );
}