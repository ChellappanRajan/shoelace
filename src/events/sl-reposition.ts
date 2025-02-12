type SlRepositionEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'sl-reposition': SlRepositionEvent;
  }
}

export default SlRepositionEvent;
