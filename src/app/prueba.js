import { useEffect, useRef } from "react";

const MyComponent = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === ref1.current) {
            console.log("Elemento 1 está visible:", entry.isIntersecting);
            if (entry.isIntersecting) {
              // Hacer algo para el primer elemento
            }
          } else if (entry.target === ref2.current) {
            console.log("Elemento 2 está visible:", entry.isIntersecting);
            if (entry.isIntersecting) {
              // Hacer algo diferente para el segundo elemento
            }
          }
        });
      },
      { threshold: 0.5 } // Ajusta el umbral según necesites
    );

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);

    return () => {
      if (ref1.current) observer.unobserve(ref1.current);
      if (ref2.current) observer.unobserve(ref2.current);
    };
  }, []);

  return (
    <div>
      <div ref={ref1} style={{ height: "200px", background: "lightblue", marginBottom: "50px" }}>
        Observando este elemento 1
      </div>
      <div ref={ref2} style={{ height: "200px", background: "lightcoral" }}>
        Observando este elemento 2
      </div>
    </div>
  );
};

export default MyComponent;
