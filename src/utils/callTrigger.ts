/**
 * Triggers Zadarma CallMe WebRTC widget
 */
export const triggerZadarmaCall = () => {
  if (typeof window === 'undefined') return;

  const widget = document.getElementById('myZadarmaCallmeWidget19992');
  if (widget) {
    // Zadarma widget listens to 'mousedown'
    widget.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
    widget.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
    widget.click();

    const inner = widget.querySelector('.callme__content, .default-phone-ico, .callme__icon') as HTMLElement;
    if (inner) {
      inner.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
      inner.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
      inner.click();
    }
    return;
  }

  // Fallback to any class-based zadarma elements
  const fallback = document.querySelector('.zdrm-phone, [class*="zadarma"]') as HTMLElement;
  if (fallback) {
    fallback.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
    fallback.click();
  }
};
