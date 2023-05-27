export const calcHeight = (elements: string[]) => {
  let height = 0;

  elements.forEach((el) => {
    const h = document.getElementById(el);
    if (h) {
      height += h?.offsetHeight;
    }
  });

  return (window.innerHeight - height);
};