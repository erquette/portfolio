// so that scrolling to a section by its id
// will not push hash fragment to the URL bar
export function useScrollTo() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return scrollTo;
}
