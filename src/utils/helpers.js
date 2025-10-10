export const getTimeLeft = (targetDate) => {
    const now = new Date();
    const diff = targetDate - now;

    const pad = (num) => String(num).padStart(2, '0');

    if (diff <= 0) return { days: '00', hours: '00', minutes: '00' };

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return { days: pad(days), hours: pad(hours), minutes: pad(minutes) };
};
