// "use client";
// import { useEffect, useRef } from "react";

// const TRAIL_LENGTH = 10;

// const StarCursor = () => {
//   const refs = useRef([]);

//   useEffect(() => {
//     let mouseX = window.innerWidth / 2;
//     let mouseY = window.innerHeight / 2;

//     const positions = Array(TRAIL_LENGTH)
//       .fill(0)
//       .map(() => ({ x: mouseX, y: mouseY }));

//     const speed = 0.4;

//     const animate = () => {
//       positions[0].x += (mouseX - positions[0].x) * speed;
//       positions[0].y += (mouseY - positions[0].y) * speed;

//       for (let i = 1; i < positions.length; i++) {
//         positions[i].x += (positions[i - 1].x - positions[i].x) * 0.22;
//         positions[i].y += (positions[i - 1].y - positions[i].y) * 0.22;
//       }

//       positions.forEach((pos, i) => {
//         const el = refs.current[i];
//         if (!el) return;
//         el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
//       });

//       requestAnimationFrame(animate);
//     };

//     const onMove = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     window.addEventListener("mousemove", onMove);
//     animate();

//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   return (
//     <>
//       {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
//         <div
//           key={i}
//           ref={(el) => (refs.current[i] = el)}
//           className="fixed top-0 left-0 z-[9999] pointer-events-none"
//           style={{
//             opacity: 1 - i / TRAIL_LENGTH,
//           }}
//         >
//           {i === 0 ? (
//             /* STAR HEAD */
//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="none"
//               className="drop-shadow-[0_0_12px_rgba(155,231,255,0.9)]"
//             >
//               <path
//                 d="M12 2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9L12 2z"
//                 fill="white"
//               />
//             </svg>
//           ) : (
//             /* TAIL DOTS */
//             <div
//               className="
//                 w-2 h-2 rounded-full
//                 bg-white
//                 blur-[1px]
//                 shadow-[0_0_10px_4px_rgba(155,231,255,0.6)]
//               "
//             />
//           )}
//         </div>
//       ))}
//     </>
//   );
// };

// export default StarCursor;
"use client";
import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 10;

const StarCursor = () => {
  const refs = useRef([]);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const positions = Array(TRAIL_LENGTH)
      .fill(0)
      .map(() => ({ x: mouseX, y: mouseY }));

    const speed = 0.8;

    const animate = () => {
      positions[0].x += (mouseX - positions[0].x) * speed;
      positions[0].y += (mouseY - positions[0].y) * speed;

      for (let i = 1; i < positions.length; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.22;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.22;
      }

      positions.forEach((pos, i) => {
        const el = refs.current[i];
        if (!el) return;
        el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      });

      requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMove);
    animate();

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="fixed top-0 left-0 z-[9999] pointer-events-none"
          style={{
            opacity: 1 - i / TRAIL_LENGTH,
          }}
        >
          {i === 0 ? (
            /* STAR HEAD */
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="drop-shadow-[0_0_12px_rgba(155,231,255,0.9)]"
            >
              <path
                d="M12 2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9L12 2z"
                fill="white"
              />
            </svg>
          ) : (
            /* TAIL DOTS */
            <div
              className="
                w-2 h-2 rounded-full
                bg-white
                blur-[1px]
                shadow-[0_0_10px_4px_rgba(155,231,255,0.6)]
              "
            />
          )}
        </div>
      ))}
    </>
  );
};

export default StarCursor;
