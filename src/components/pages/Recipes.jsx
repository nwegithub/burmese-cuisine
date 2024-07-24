// import React from 'react'
// const Recipes = () => {
//     return (
//         <div>
//             <h1>Hello</h1>
//             <div style={{backgroundColor : 'red',padding : '10px'}}>
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                     <div style={{ position: 'relative', width: '60px', height: '60px' }}>
//                         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px', height: '40px', backgroundColor: 'lightblue', borderRadius: '50%' }}></div>
//                         <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', margin: 0, lineHeight: '40px', fontSize: '20px', zIndex: 1 }}>1</p>
//                     </div>
//                 </div>
//                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                     <p>hi</p>
//                     <p style={{ textAlign: 'center' }}>
//                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dicta blanditiis voluptatibus eum velit quod, perspiciatis minima magnam atque sit officiis, voluptatum unde nulla voluptate incidunt non vero exercitationem. Quae.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Recipes

import React, { useState, useEffect } from 'react';

// const Content = ({ number, name, category }) => (
//   <div style={{ backgroundColor: 'pink', padding: '10px', marginBottom: '10px' }}>
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <div style={{ position: 'relative', width: '60px', height: '60px' }}>
//         <div
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '40px',
//             height: '40px',
//             backgroundColor: 'lightblue',
//             borderRadius: '50%',
//           }}
//         ></div>
//         <p
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             margin: 0,
//             lineHeight: '40px',
//             fontSize: '20px',
//             zIndex: 1,
//           }}
//         >
//           {number}
//         </p>
//       </div>
//     </div>
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <p style={{ textAlign: 'center' }}>

//       </p>
//       <p style={{ textAlign: 'center' }}>
//         Category: {article.category}
//       </p>
//     </div>
//   </div>
// );

const Recipes = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/articles/allArticle')
      .then(response => response.json())
      .then(data => {
        setArticles(data);
      })
      .catch(error => {
        console.error('There was an error fetching the product data!', error);
      });
  }, []);

  if (articles.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* {articles.map((article, index) => (
        <Content key={index} number={index + 1} />
         ))} */}
      <div style={{ backgroundColor: 'pink', padding: '10px', marginBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '60px', height: '60px' }}>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '40px',
                height: '40px',
                backgroundColor: 'lightblue',
                borderRadius: '50%',
              }}
            ></div>
            <p
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                margin: 0,
                lineHeight: '40px',
                fontSize: '20px',
                zIndex: 1,
              }}
            >
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p style={{ textAlign: 'center' }}></p>
          {articles.map((article, index) => (
            <div>{article.name}
              {article.category}</div>

          ))}
        </div>
      </div>

    </div>

  );
};

export default Recipes;
