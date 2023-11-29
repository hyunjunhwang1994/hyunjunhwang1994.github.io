import { useEffect } from "react";
import mermaid from "mermaid";

const useMermaidEffect = () => {
  useEffect(() => {
    const initializeMermaid = async () => {
      mermaid.initialize({
        startOnLoad: true,
      });

      const elements: HTMLCollectionOf<Element> = await new Promise((resolve) => {
        const checkElements = () => {
          const foundElements = document.getElementsByClassName("language-mermaid");
          if (foundElements.length > 0) {
            resolve(foundElements);
          } else {
            setTimeout(checkElements, 100);
          }
        };
        checkElements();
      });

      for (let i = 0; i < elements.length; i++) {
        mermaid.render(
            "mermaid" + i,
            elements[i].textContent || "",
            (svgCode: string) => {
              elements[i].innerHTML = svgCode;
            }
        );
      }
    };

    initializeMermaid();
  }, []);

  return null;
};

export default useMermaidEffect;


