export function formatDate(date: Date): string {
  const newDate = new Date(date);

  return newDate.toLocaleDateString('es-Es', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getHour(date: Date): string {
  const newDate = new Date(date);

  return newDate.toLocaleTimeString('es-Es', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
}
