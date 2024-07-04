// import React from "react";
// import "./CoinDisplay.css";

// const CoinDisplay = ({ coins, rank, onCoinClick, energy, animations }) => {
//   const disabled = energy === 0;

//   return (
//     <div className="Container">
//       <div className="CoinHeader">
//         <div className="coin">
//           <div className="CoinIcon" />
//         <div className="CoinText">{coins.toLocaleString()}</div>
//         </div>
        
//         <div
//           className="Rank"
//           onClick={() =>
//             document
//               .getElementById("rankSection")
//               .scrollIntoView({ behavior: "smooth" })
//           }
//         >
//           {rank}
//         </div>
//       </div>
//       <div className="RelativeContainer" onTouchStart={onCoinClick}>
//         {animations.map((animation) => (
//           <div
//             key={animation.id}
//             className="PlusOne"
//             style={{ left: `${animation.x}px`, top: `${animation.y}px` }}
//           >
//             +1
//           </div>
//         ))}
//         <div className={`CoinDiv ${disabled ? "disabled" : ""}`} />
//       </div>
//     </div>
//   );
// };

// export default CoinDisplay;
