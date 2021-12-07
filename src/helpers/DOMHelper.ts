export function isElemInView(el: any) {
  if (el.offsetHeight === 0) return false;
  const { top } = el.getBoundingClientRect();
  return top <= window.innerHeight;
}

export function stopPropagation(event: any) {
  event.stopPropagation();
}
