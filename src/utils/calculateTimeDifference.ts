export const calculateTimeDifference = (_postTime: string = '') => {
    const currentTime = new Date();
    const postTime = new Date(_postTime);
    const timeDifference = currentTime.getTime() - postTime.getTime();
    const minutes = Math.floor(timeDifference / 60000);
    if (minutes < 60) {
      return `${minutes} minutes ago`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hours ago`;
    }
    const days = Math.floor(hours / 24);
    if (days < 7) {
      return `${days} days ago`;
    }
    const weeks = Math.floor(days / 7);
    if (weeks < 4) {
      return `${weeks} weeks ago`;
    }
    const months = Math.floor(weeks / 4);
    return `${months} months ago`;
  };